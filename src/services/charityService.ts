import { Injectable } from '@angular/core';
import { Charity, CharityCategory } from '../models/charity';
import { Utils } from '../services/utilsService';

@Injectable()
export class CharityService {

    private charities: any;
    private categories: any;

    constructor(
    ) {
        this.categories = {
            0: {
                title: {
                    en: "",
                    cz: "Děti"
                }
            },
            1: {
                title: {
                    en: "",
                    cz: "Zvířata"
                }
            },
            2: {
                title: {
                    en: "",
                    cz: "Veřejně prospěšné"
                }
            },
            3: {
                title: {
                    en: "",
                    cz: "Ostatní"
                }
            }
        }
        this.charities = {
            0: {
                key: "0",
                type: 0,
                img: "1.jpg",
                title: {
                    en: "",
                    cz: "Invalidní vozík pro Kačku"
                },
                description: {
                    en: "",
                    cz: "Variabilní invalidní vozík určený pro uživatele s vyšší hmotností se zachováním všech výhod lehkých skládacích vozíků."
                },
                detail: {
                    en: "",
                    cz: "Příspevkem pro tento projekt zajistíš Kačce lepší a pohodlnější život. Mužeš na sebe být pyšný."
                }
            },
            1: {
                key: "1",
                type: 0,
                img: "1.jpg",
                title: {
                    en: "",
                    cz: "Invalidní vozík pro Kačku"
                },
                description: {
                    en: "",
                    cz: "Variabilní invalidní vozík určený pro uživatele s vyšší hmotností se zachováním všech výhod lehkých skládacích vozíků."
                },
                detail: {
                    en: "",
                    cz: "Příspevkem pro tento projekt zajistíš Kačce lepší a pohodlnější život. Mužeš na sebe být pyšný."
                }
            },
            2: {
                key: "2",
                type: 0,
                img: "1.jpg",
                title: {
                    en: "",
                    cz: "Invalidní vozík pro Kačku"
                },
                description: {
                    en: "",
                    cz: "Variabilní invalidní vozík určený pro uživatele s vyšší hmotností se zachováním všech výhod lehkých skládacích vozíků."
                },
                detail: {
                    en: "",
                    cz: "Příspevkem pro tento projekt zajistíš Kačce lepší a pohodlnější život. Mužeš na sebe být pyšný."
                }
            },
            3: {
                key: "3",
                type: 1,
                img: "1.jpg",
                title: {
                    en: "",
                    cz: "Invalidní vozík pro Kačku"
                },
                description: {
                    en: "",
                    cz: "Variabilní invalidní vozík určený pro uživatele s vyšší hmotností se zachováním všech výhod lehkých skládacích vozíků."
                },
                detail: {
                    en: "",
                    cz: "Příspevkem pro tento projekt zajistíš Kačce lepší a pohodlnější život. Mužeš na sebe být pyšný."
                }
            },
            4: {
                key: "4",
                type: 1,
                img: "1.jpg",
                title: {
                    en: "",
                    cz: "Invalidní vozík pro Kačku"
                },
                description: {
                    en: "",
                    cz: "Variabilní invalidní vozík určený pro uživatele s vyšší hmotností se zachováním všech výhod lehkých skládacích vozíků."
                },
                detail: {
                    en: "",
                    cz: "Příspevkem pro tento projekt zajistíš Kačce lepší a pohodlnější život. Mužeš na sebe být pyšný."
                }
            },
            5: {
                key: "5",
                type: 2,
                img: "1.jpg",
                title: {
                    en: "",
                    cz: "Invalidní vozík pro Kačku"
                },
                description: {
                    en: "",
                    cz: "Variabilní invalidní vozík určený pro uživatele s vyšší hmotností se zachováním všech výhod lehkých skládacích vozíků."
                },
                detail: {
                    en: "",
                    cz: "Příspevkem pro tento projekt zajistíš Kačce lepší a pohodlnější život. Mužeš na sebe být pyšný."
                }
            }
        };
    }

    getCharityById(id: string): Promise<Charity> {
        return Promise.resolve(this.charities[id]);
    }

    getCharitiesByType(type: string): Promise<Charity[]> {
        return Promise.resolve(Utils.objectToArrayStoreKeys(this.charities).filter(x => x.type == type));
    }

    getCharities(): Promise<Charity[]> {
        return Promise.resolve(this.charities);
    }

    getCategories(): Promise<CharityCategory[]> {
        return Promise.resolve(this.categories);
    }
}
