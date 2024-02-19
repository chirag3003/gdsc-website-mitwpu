interface IProjectDoc {
    id: string;
    title: string;
    singleLineDescription: string;
    multiLineDescription: string;
    bannerImgUrl: string;
    images: string[];
    contributors: {
        memberId: string;
        role: string;
    }[];
    mediumLink: string;
}