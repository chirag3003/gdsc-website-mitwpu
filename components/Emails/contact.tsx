import {
    Body,
    Container,
    Head,
    Html,
    Row,
    Section,
    Text,
} from '@react-email/components'
import * as React from 'react'

interface ContactEmailHtmlProps {
    name?: string
    email?: string
    message?: string
    phoneNo?: string
}

export const ContactEmailHtml = ({
    name = '',
    email = '',
    message = '',
    phoneNo = '',
}: ContactEmailHtmlProps) => {
    return (
        <Html>
            <Head />

            <Body style={main}>
                <Container style={container}>
                    <Section style={{ paddingBottom: '20px' }}>
                        <Row>
                            <Text style={paragraph}>Name</Text>
                            <Text style={review}>{name}</Text>
                            <Text style={paragraph}>email</Text>
                            <Text style={review}>{email}</Text>
                            <Text style={paragraph}>Phone No</Text>
                            <Text style={review}>{phoneNo}</Text>
                            <Text style={paragraph}>Message</Text>
                            <Text style={review}>{message}</Text>
                        </Row>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

export default ContactEmailHtml

const main = {
    backgroundColor: '#ffffff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px',
    maxWidth: '100%',
}
const paragraph = {
    fontSize: '18px',
    lineHeight: '1.4',
    color: '#484848',
}

const review = {
    ...paragraph,
    padding: '24px',
    backgroundColor: '#f2f3f3',
    borderRadius: '4px',
}
