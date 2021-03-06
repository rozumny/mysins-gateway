import { Injectable } from '@angular/core';
import { Sin } from '../models/sin';

@Injectable()
export class SinsService {

    private sins: any;

    constructor(
    ) {
        this.sins = {
            0: {
                title: "sins_type_0",
                short: "sins_type_0_short",
                questions: {
                    0: {
                        title: "sins_type_0_question_0",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_type_0_question_0_answer_0",
                                value: "1"
                            },
                            1: {
                                title: "sins_type_0_question_0_answer_1",
                                value: "0.98"
                            },
                            2: {
                                title: "sins_type_0_question_0_answer_2",
                                value: "0.95"
                            },
                            3: {
                                title: "sins_type_0_question_0_answer_3",
                                value: "1"
                            },
                            4: {
                                title: "sins_type_0_question_0_answer_4",
                                value: "0.9"
                            },
                            5: {
                                title: "sins_type_0_question_0_answer_5",
                                value: "1.1"
                            },
                            6: {
                                title: "sins_type_0_question_0_answer_6",
                                value: "0.8"
                            },
                            7: {
                                title: "sins_type_0_question_0_answer_7",
                                value: "0.75"
                            },
                            8: {
                                title: "sins_type_0_question_0_answer_8",
                                value: "0.75"
                            },
                            9: {
                                title: "sins_type_0_question_0_answer_9",
                                value: "0.75"
                            },
                            10: {
                                title: "sins_type_0_question_0_answer_10",
                                value: "0.75"
                            },
                            11: {
                                title: "sins_type_0_question_0_answer_11",
                                value: "0.75"
                            },
                            12: {
                                title: "sins_type_0_question_0_answer_12",
                                value: "0.7"
                            }
                        }
                    },
                    1: {
                        title: "sins_type_0_question_1",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_type_0_question_1_answer_0",
                                value: "1.2"
                            },
                            1: {
                                title: "sins_type_0_question_1_answer_1",
                                value: "1.0"
                            },
                            2: {
                                title: "sins_type_0_question_1_answer_2",
                                value: "1.2"
                            },
                            3: {
                                title: "sins_type_0_question_1_answer_3",
                                value: "1.4"
                            },
                        }
                    },
                    2: {
                        title: "sins_type_0_question_2",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_type_0_question_2_answer_0",
                                value: "50"
                            },
                            1: {
                                title: "sins_type_0_question_2_answer_1",
                                value: "50"
                            },
                            2: {
                                title: "sins_type_0_question_2_answer_2",
                                value: "50"
                            },
                            3: {
                                title: "sins_type_0_question_2_answer_3",
                                value: "50"
                            },
                            4: {
                                title: "sins_type_0_question_2_answer_4",
                                value: "50"
                            },
                            5: {
                                title: "sins_type_0_question_2_answer_5",
                                value: "50"
                            },
                            6: {
                                title: "sins_type_0_question_2_answer_6",
                                value: "50"
                            },
                            7: {
                                title: "sins_type_0_question_2_answer_7",
                                value: "50"
                            },
                            8: {
                                title: "sins_type_0_question_2_answer_8",
                                value: "50"
                            },
                            9: {
                                title: "sins_type_0_question_2_answer_9",
                                value: "50"
                            },
                            10: {
                                title: "sins_type_0_question_2_answer_10",
                                value: "50"
                            },
                            11: {
                                title: "sins_type_0_question_2_answer_11",
                                value: "50"
                            },
                            12: {
                                title: "sins_type_0_question_2_answer_12",
                                value: "50"
                            },
                            13: {
                                title: "sins_type_0_question_2_answer_13",
                                value: "50"
                            },
                            14: {
                                title: "sins_type_0_question_2_answer_14",
                                value: "50"
                            },
                            15: {
                                title: "sins_type_0_question_2_answer_15",
                                value: "50"
                            }
                        }
                    },
                    3: {
                        title: "sins_type_0_question_3",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_type_0_question_3_answer_0",
                                value: "1"
                            },
                            1: {
                                title: "sins_type_0_question_3_answer_1",
                                value: "2"
                            },
                            2: {
                                title: "sins_type_0_question_3_answer_2",
                                value: "3"
                            }
                        }
                    }
                }
            },
            1: {
                title: "sins_type_1",
                short: "sins_type_1_short",
                questions: {
                    0: {
                        title: "sins_type_1_question_0",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_type_1_question_0_answer_0",
                                value: "1.2"
                            },
                            1: {
                                title: "sins_type_1_question_0_answer_1",
                                value: "1"
                            },
                            2: {
                                title: "sins_type_1_question_0_answer_2",
                                value: "1.5"
                            },
                            3: {
                                title: "sins_type_1_question_0_answer_3",
                                value: "1.1"
                            },
                            4: {
                                title: "sins_type_1_question_0_answer_4",
                                value: "2"
                            },
                            5: {
                                title: "sins_type_1_question_0_answer_5",
                                value: "3"
                            },
                        }
                    },
                    1: {
                        title: "sins_type_1_question_1",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_type_1_question_1_answer_0",
                                value: "10"
                            },
                            1: {
                                title: "sins_type_1_question_1_answer_1",
                                value: "30"
                            },
                            2: {
                                title: "sins_type_1_question_1_answer_2",
                                value: "50"
                            },
                            3: {
                                title: "sins_type_1_question_1_answer_3",
                                value: "100"
                            },
                        }
                    },
                    2: {
                        title: "sins_type_1_question_2",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_type_1_question_2_answer_0",
                                value: "1"
                            },
                            1: {
                                title: "sins_type_1_question_2_answer_1",
                                value: "2"
                            },
                            2: {
                                title: "sins_type_1_question_2_answer_2",
                                value: "1.5"
                            },
                            3: {
                                title: "sins_type_1_question_2_answer_3",
                                value: "2.5"
                            },
                        }
                    },
                    3: {
                        title: "sins_type_1_question_3",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_type_1_question_3_answer_0",
                                value: "0.2"
                            },
                            1: {
                                title: "sins_type_1_question_3_answer_1",
                                value: "1"
                            },
                        }
                    }
                },
            },
            2: {
                title: "sins_type_2",
                short: "sins_type_2_short",
                questions: {
                    0: {
                        title: "sins_type_2_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_type_2_question_0_answer_0",
                                value: "30"
                            },
                            1: {
                                title: "sins_type_2_question_0_answer_1",
                                value: "30"
                            },
                            2: {
                                title: "sins_type_2_question_0_answer_2",
                                value: "40"
                            },
                            3: {
                                title: "sins_type_2_question_0_answer_3",
                                value: "40"
                            },
                            4: {
                                title: "sins_type_2_question_0_answer_4",
                                value: "40"
                            },
                            5: {
                                title: "sins_type_2_question_0_answer_5",
                                value: "50"
                            },
                            6: {
                                title: "sins_type_2_question_0_answer_6",
                                value: "50"
                            },
                            7: {
                                title: "sins_type_2_question_0_answer_7",
                                value: "50"
                            },
                            8: {
                                title: "sins_type_2_question_0_answer_8",
                                value: "50"
                            },
                            9: {
                                title: "sins_type_2_question_0_answer_9",
                                value: "60"
                            },
                            10: {
                                title: "sins_type_2_question_0_answer_10",
                                value: "60"
                            },
                            11: {
                                title: "sins_type_2_question_0_answer_11",
                                value: "60"
                            },
                            12: {
                                title: "sins_type_2_question_0_answer_12",
                                value: "60"
                            },
                            13: {
                                title: "sins_type_2_question_0_answer_13",
                                value: "70"
                            },
                            14: {
                                title: "sins_type_2_question_0_answer_14",
                                value: "70"
                            },
                            15: {
                                title: "sins_type_2_question_0_answer_15",
                                value: "70"
                            },
                            16: {
                                title: "sins_type_2_question_0_answer_16",
                                value: "70"
                            },
                            17: {
                                title: "sins_type_2_question_0_answer_17",
                                value: "70"
                            },
                            18: {
                                title: "sins_type_2_question_0_answer_18",
                                value: "70"
                            },
                            19: {
                                title: "sins_type_2_question_0_answer_19",
                                value: "80"
                            },
                            20: {
                                title: "sins_type_2_question_0_answer_20",
                                value: "80"
                            },
                            21: {
                                title: "sins_type_2_question_0_answer_21",
                                value: "80"
                            },
                            22: {
                                title: "sins_type_2_question_0_answer_22",
                                value: "80"
                            },
                            23: {
                                title: "sins_type_2_question_0_answer_23",
                                value: "80"
                            },
                            24: {
                                title: "sins_type_2_question_0_answer_24",
                                value: "80"
                            },
                            25: {
                                title: "sins_type_2_question_0_answer_25",
                                value: "90"
                            },
                            26: {
                                title: "sins_type_2_question_0_answer_26",
                                value: "90"
                            },
                            27: {
                                title: "sins_type_2_question_0_answer_27",
                                value: "90"
                            },
                            28: {
                                title: "sins_type_2_question_0_answer_28",
                                value: "90"
                            },
                            29: {
                                title: "sins_type_2_question_0_answer_29",
                                value: "100"
                            },
                            30: {
                                title: "sins_type_2_question_0_answer_30",
                                value: "100"
                            },
                            31: {
                                title: "sins_type_2_question_0_answer_31",
                                value: "100"
                            },
                            32: {
                                title: "sins_type_2_question_0_answer_32",
                                value: "100"
                            },
                            33: {
                                title: "sins_type_2_question_0_answer_33",
                                value: "100"
                            },
                            34: {
                                title: "sins_type_2_question_0_answer_34",
                                value: "100"
                            },
                        }
                    },
                    1: {
                        title: "sins_type_2_question_1",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_type_2_question_1_answer_0",
                                value: "0.2"
                            },
                            1: {
                                title: "sins_type_2_question_1_answer_1",
                                value: "1"
                            },
                        }
                    }
                }
            },
            3: {
                title: "sins_type_3",
                short: "sins_type_3_short",
                questions: {
                    0: {
                        title: "sins_type_3_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_type_3_question_0_answer_0",
                                value: "20"
                            },
                            1: {
                                title: "sins_type_3_question_0_answer_1",
                                value: "50"
                            },
                            2: {
                                title: "sins_type_3_question_0_answer_2",
                                value: "100"
                            },
                        }
                    }
                }
            },
            4: {
                title: "sins_type_4",
                short: "sins_type_4_short",
                questions: {
                    0: {
                        title: "sins_type_4_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_type_4_question_0_answer_0",
                                value: "40"
                            },
                            1: {
                                title: "sins_type_4_question_0_answer_1",
                                value: "30"
                            },
                            2: {
                                title: "sins_type_4_question_0_answer_2",
                                value: "50"
                            },
                            3: {
                                title: "sins_type_4_question_0_answer_3",
                                value: "20"
                            },
                        }
                    }
                    // ,
                    // 1: {
                    //     title: "sins_type_4_question_1",
                    //     type: "multi",
                    //     answers: {
                    //         0: {
                    //             title: "sins_type_4_question_1_answer_0",
                    //             value: "1"
                    //         },
                    //         1: {
                    //             title: "sins_type_4_question_1_answer_1",
                    //             value: "0.5"
                    //         },
                    //     }
                    // }
                }
            },
            5: {
                title: "sins_type_5",
                short: "sins_type_5_short",
                questions: {
                    0: {
                        title: "sins_type_5_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_type_5_question_0_answer_0",
                                value: "30"
                            },
                            1: {
                                title: "sins_type_5_question_0_answer_1",
                                value: "60"
                            },
                            2: {
                                title: "sins_type_5_question_0_answer_2",
                                value: "30"
                            },
                            3: {
                                title: "sins_type_5_question_0_answer_3",
                                value: "40"
                            },
                            4: {
                                title: "sins_type_5_question_0_answer_4",
                                value: "50"
                            },
                            5: {
                                title: "sins_type_5_question_0_answer_5",
                                value: "60"
                            },
                            6: {
                                title: "sins_type_5_question_0_answer_6",
                                value: "80"
                            },
                            7: {
                                title: "sins_type_5_question_0_answer_7",
                                value: "100"
                            },
                        }
                    },
                    1: {
                        title: "sins_type_5_question_1",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_type_5_question_1_answer_0",
                                value: "0.3"
                            },
                            1: {
                                title: "sins_type_5_question_1_answer_1",
                                value: "0.7"
                            },
                            2: {
                                title: "sins_type_5_question_1_answer_2",
                                value: "1"
                            },
                        }
                    }
                }
            },
            6: {
                title: "sins_type_6",
                short: "sins_type_6_short",
                questions: {
                    0: {
                        title: "sins_type_6_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_type_6_question_0_answer_0",
                                value: "50"
                            },
                            1: {
                                title: "sins_type_6_question_0_answer_1",
                                value: "100"
                            },
                            2: {
                                title: "sins_type_6_question_0_answer_2",
                                value: "40"
                            },
                            3: {
                                title: "sins_type_6_question_0_answer_3",
                                value: "80"
                            },
                            4: {
                                title: "sins_type_6_question_0_answer_4",
                                value: "30"
                            }
                        }
                    },
                    1: {
                        title: "sins_type_6_question_1",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_type_6_question_1_answer_0",
                                value: "0.9"
                            },
                            1: {
                                title: "sins_type_6_question_1_answer_1",
                                value: "1"
                            },
                            2: {
                                title: "sins_type_6_question_1_answer_2",
                                value: "0.5"
                            }
                        }
                    }
                }
            },
            7: {
                title: "sins_type_7",
                short: "sins_type_7_short",
                questions: {
                    0: {
                        title: "sins_type_7_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_type_7_question_0_answer_0",
                                value: "100"
                            },
                            1: {
                                title: "sins_type_7_question_0_answer_1",
                                value: "50"
                            },
                            2: {
                                title: "sins_type_7_question_0_answer_2",
                                value: "20"
                            }
                        }
                    },
                }
            }

        };
    }

    getById(id: string): Promise<Sin> {
        this.sins[id].key = id;
        return Promise.resolve(this.sins[id]);
    }

    getAll(): Promise<Sin[]> {
        return Promise.resolve(this.sins);
    }
}
