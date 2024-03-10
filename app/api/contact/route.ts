import { transporter } from '@/lib/nodemailer'
import { contactInputValidator } from '@/validators/contact.validator'
import { render } from '@react-email/render'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import { ZodError } from 'zod'
import { ContactEmailHtml } from '@/components/Emails/contact'

export async function POST(req: Request) {
  try {
    const body = contactInputValidator.parse(await req.json())
    const name = `${body.firstName} ${body.lastName}`
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          from: process.env.GMAIL_USERNAME,
          to: 'gdscmitofficial@mitwpu.edu.in',
          subject: `You have received a message from ${name}`,
          html: render(
            ContactEmailHtml({
              name: name,
              email: body.email,
              message: body.message,
              phoneNo: body.phoneNo,
            })
          ),
        },
        function(err, info) {
          if (err) {
            reject(err)
          } else {
            resolve({})
          }
        }
      )
    })
    return new Response('ok')
  } catch (err) {
    if (err instanceof ZodError) {
      return new Response(ReasonPhrases.BAD_REQUEST, {
        status: StatusCodes.BAD_REQUEST,
      })
    }
    return new Response(ReasonPhrases.INTERNAL_SERVER_ERROR, {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
    })
  }
}
