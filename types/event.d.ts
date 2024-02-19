interface IEventDoc {
    multiLineDescription: string;
    venue: string;
    googleMapLink: string;
    id: string;
    title: string;
    agenda: IEventAgenda[]
    singleLineDescription: string;
    type: string;
    flashbackImageLinks: Array<string>;
    bannerImageLinks: Array<string>;
}

interface IEventAgenda {
    activities: string[]
    data: string
    starts_at: string
    ends_at: string
}