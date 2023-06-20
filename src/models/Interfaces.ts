export interface IMarvel {
    results: {
        id: number,
        name: string,
        description: string,
        thumbnail: {
            path: string,
            extension: string
        },
        resourceURI: string,
        comics: {
            available: number,
            collectionURI: string,
            items: {
                resourceURI: string,
                name: string
            }[],
        }[],
    }[]
};

export interface IChar {
    id: number,
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string
    }
};


export interface ICharacters {
    code: number,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    etag: string,
    data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        returned: number,
        results: {
            id: number,
            name: string,
            description: string,
            modified: string,
            thumbnail: {
                path: string,
                extension: string
            },
            resourceURI: string,
            comics: {
                available: number,
                collectionURI: string,
                items: {
                    resourceURI: string,
                    name: string
                }[],
            }[],
            series: {
                available: number,
                collectionURI: string,
                items: {
                    resourceURI: string,
                    name: string
                }[],
            }[],
            stories: {
                available: number,
                collectionURI: string,
                items: {
                    resourceURI: string,
                    name: string
                }[],
            }[],
            events: {
                available: number,
                collectionURI: string,
                returned: number,
                items: {
                    resourceURI: string,
                    name: string
                }[],
            },
            urls: {
                type: string,
                url: string
            }[]
        }[]
    }
};



