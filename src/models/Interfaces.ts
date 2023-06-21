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

export interface IDetail {
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
            resourceURI: string,
            type: string,
            modified: string,
            thumbnail: {
                path: string,
                extension: string
            }
        }[]
    }
};

export interface IQuery {
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
            resourceURI: string,
            type: string,
            modified: string,
            thumbnail: {
                path: string,
                extension: string
            }
        }[]
    };
};

export interface IQueryState {
    queries: IQuery[],
    loading: boolean,
    error: Error | null
};

export interface IFind {
    id: number,
    name: string,
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
        returned: number,
    },
    series: {
        available: number,
        collectionURI: string,
        items: {
            resourceURI: string,
            name: string
        }[],
        returned: number,
    },
    stories: {
        available: number,
        collectionURI: string,
        items: {
            resourceURI: string,
            name: string,
            type: string
        }[],
        returned: number,
    },
    events: {
        available: number,
        collectionURI: string,
        items: {
            resourceURI: string,
            name: string
        }[],
        returned: number
    },
    urls: {
        type: string,
        url: string
    }[]
};


// export interface Root {
//     code: number,
//     copyright: string,
//     attributionText: string,
//     attributionHTML: string,
//     etag: string,
//     data: Data
// };

// export interface Data {
//     offset: number,
//     limit: number,
//     total: number,
//     count: number,
//     results: Result[],
// };

// export interface Result {
//     id: number,
//     title: string,
//     name: string,
//     fullName: string,
//     description: string | undefined,
//     modified: string,
//     thumbnail: Thumb,
//     resourceURI: string,
//     comics: Comics,
//     series: Series,
//     stories: Stories,
//     events: Events,
//     urls: URL[],
//     textObject: Description,
// };

// export interface Description {
//     type: string,
//     language: string,
//     text: string
// };

// export interface Thumb {
//     path: string,
//     extension: string
// };

// export interface Comics {
//     available: number,
//     collectionURI: string,
//     items: ComicItems[],
//     returned: number
// };

// export interface ComicItems {
//     resourceURI: string,
//     name: string
// };

// export interface Series {
//     available: number,
//     collectionURI: string,
//     items: SeriesItems[],
//     returned: number
// };

// export interface SeriesItems {
//     resourceURI: string,
//     name: string
// };

// export interface Stories {
//     available: number,
//     collectionURI: string,
//     items: StoriesItems[],
//     returned: number
// };

// export interface StoriesItems {
//     resourceURI: string,
//     name: string,
//     type: string
// };

// export interface Events {
//     available: number,
//     collectionURI: string,
//     items: EventsItems[],
//     returned: number
// };

// export interface EventsItems {
//     resourceURI: string,
//     name: string
// };

// export interface URL {
//     type: string,
//     url: string
// };


