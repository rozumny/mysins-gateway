import { Injectable } from '@angular/core';
import { Sin } from '../models/sin';

@Injectable()
export class SinsService {

    constructor(
    ) {
    }

    getById(id: string): Promise<Sin> {
        var sins = {
            0: {
                title: "sins_type_0",
                questions: {
                    0: {
                        title: "sins_question_0",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_question_0_answer_0",
                                value: "1.2"
                            },
                            1: {
                                title: "sins_question_0_answer_1",
                                value: "1.0"
                            },
                            2: {
                                title: "sins_question_0_answer_2",
                                value: "1.2"
                            },
                            3: {
                                title: "sins_question_0_answer_3",
                                value: "1.4"
                            },
                            4: {
                                title: "sins_question_0_answer_4",
                                value: "1.6"
                            }
                        }
                    },
                    1: {
                        title: "sins_question_1",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_question_1_answer_0",
                                value: "1"
                            },
                            1: {
                                title: "sins_question_1_answer_1",
                                value: "0.98"
                            },
                            2: {
                                title: "sins_question_1_answer_2",
                                value: "0.95"
                            },
                            3: {
                                title: "sins_question_1_answer_3",
                                value: "1"
                            },
                            4: {
                                title: "sins_question_1_answer_4",
                                value: "0.9"
                            },
                            5: {
                                title: "sins_question_1_answer_5",
                                value: "1.1"
                            },
                            6: {
                                title: "sins_question_1_answer_6",
                                value: "0.8"
                            },
                            7: {
                                title: "sins_question_1_answer_7",
                                value: "0.75"
                            },
                            8: {
                                title: "sins_question_1_answer_8",
                                value: "0.75"
                            },
                            9: {
                                title: "sins_question_1_answer_9",
                                value: "0.75"
                            },
                            10: {
                                title: "sins_question_1_answer_10",
                                value: "0.75"
                            },
                            11: {
                                title: "sins_question_1_answer_11",
                                value: "0.75"
                            },
                            12: {
                                title: "sins_question_1_answer_12",
                                value: "0.7"
                            }
                        }
                    },
                    2: {
                        title: "sins_question_2",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_question_2_answer_0",
                                value: "50"
                            },
                            1: {
                                title: "sins_question_2_answer_1",
                                value: "50"
                            },
                            2: {
                                title: "sins_question_2_answer_2",
                                value: "50"
                            },
                            3: {
                                title: "sins_question_2_answer_3",
                                value: "50"
                            },
                            4: {
                                title: "sins_question_2_answer_4",
                                value: "50"
                            },
                            5: {
                                title: "sins_question_2_answer_5",
                                value: "50"
                            },
                            6: {
                                title: "sins_question_2_answer_6",
                                value: "50"
                            },
                            7: {
                                title: "sins_question_2_answer_7",
                                value: "50"
                            },
                            8: {
                                title: "sins_question_2_answer_8",
                                value: "50"
                            },
                            9: {
                                title: "sins_question_2_answer_9",
                                value: "50"
                            },
                            10: {
                                title: "sins_question_2_answer_10",
                                value: "50"
                            },
                            11: {
                                title: "sins_question_2_answer_11",
                                value: "50"
                            },
                            12: {
                                title: "sins_question_2_answer_12",
                                value: "50"
                            },
                            13: {
                                title: "sins_question_2_answer_13",
                                value: "50"
                            },
                            14: {
                                title: "sins_question_2_answer_14",
                                value: "50"
                            },
                            15: {
                                title: "sins_question_2_answer_15",
                                value: "50"
                            }
                        }
                    },
                    3: {
                        title: "sins_question_3",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_question_3_answer_0",
                                value: "1"
                            },
                            1: {
                                title: "sins_question_3_answer_1",
                                value: "2"
                            },
                            2: {
                                title: "sins_question_3_answer_2",
                                value: "3"
                            }
                        }
                    }
                }
            },
            1: {
                title: "sins_type_1",
                questions: {
                    0: {
                        title: "sins_question_0",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_question_0_answer_0",
                                value: "1.2"
                            },
                            1: {
                                title: "sins_question_0_answer_1",
                                value: "1"
                            },
                            2: {
                                title: "sins_question_0_answer_2",
                                value: "1.5"
                            },
                            3: {
                                title: "sins_question_0_answer_3",
                                value: "1.1"
                            },
                            4: {
                                title: "sins_question_0_answer_4",
                                value: "2"
                            },
                            5: {
                                title: "sins_question_0_answer_5",
                                value: "3"
                            },
                        }
                    }
                },
                1: {
                    title: "sins_question_1",
                    type: "base",
                    answers: {
                        0: {
                            title: "sins_question_1_answer_0",
                            value: "10"
                        },
                        1: {
                            title: "sins_question_1_answer_1",
                            value: "30"
                        },
                        2: {
                            title: "sins_question_1_answer_2",
                            value: "50"
                        },
                        3: {
                            title: "sins_question_1_answer_3",
                            value: "100"
                        },
                    }
                },
                2: {
                    title: "sins_question_2",
                    type: "multi",
                    answers: {
                        0: {
                            title: "sins_question_2_answer_0",
                            value: "1"
                        },
                        1: {
                            title: "sins_question_2_answer_1",
                            value: "2"
                        },
                        2: {
                            title: "sins_question_2_answer_2",
                            value: "1.5"
                        },
                        3: {
                            title: "sins_question_2_answer_3",
                            value: "2.5"
                        },
                    }
                },
                3: {
                    title: "sins_question_3",
                    type: "multi",
                    answers: {
                        0: {
                            title: "sins_question_3_answer_0",
                            value: "0.2"
                        },
                        1: {
                            title: "sins_question_3_answer_1",
                            value: "1"
                        },
                    }
                }
            },

            2: {
                title: "sins_type_2",
                questions: {
                    0: {
                        title: "sins_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_question_0_answer_0",
                                value: "30"
                            },
                            1: {
                                title: "sins_question_0_answer_1",
                                value: "60"
                            },
                            2: {
                                title: "sins_question_0_answer_2",
                                value: "100"
                            },
                        }
                    },
                    1: {
                        title: "sins_question_1",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_question_1_answer_0",
                                value: "0.2"
                            },
                            1: {
                                title: "sins_question_1_answer_1",
                                value: "1"
                            },
                        }
                    }
                }
            },
            3: {
                title: "sins_type_3",
                questions: {
                    0: {
                        title: "sins_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_question_0_answer_0",
                                value: "20"
                            },
                            1: {
                                title: "sins_question_0_answer_1",
                                value: "50"
                            },
                            2: {
                                title: "sins_question_0_answer_2",
                                value: "100"
                            },
                        }
                    }
                }
            },
            4: {
                title: "sins_type_4",
                questions: {
                    0: {
                        title: "sins_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_question_0_answer_0",
                                value: "40"
                            },
                            1: {
                                title: "sins_question_0_answer_1",
                                value: "30"
                            },
                            2: {
                                title: "sins_question_0_answer_2",
                                value: "50"
                            },
                            3: {
                                title: "sins_question_0_answer_3",
                                value: "20"
                            },
                        }
                    },
                    1: {
                        title: "sins_question_1",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_question_1_answer_0",
                                value: "1"
                            },
                            1: {
                                title: "sins_question_1_answer_1",
                                value: "0.5"
                            },
                        }
                    }
                }
            },
            5: {
                title: "sins_type_5",
                questions: {
                    0: {
                        title: "sins_question_0",
                        type: "base",
                        answers: {
                            0: {
                                title: "sins_question_0_answer_0",
                                value: "30"
                            },
                            1: {
                                title: "sins_question_0_answer_1",
                                value: "60"
                            },
                            2: {
                                title: "sins_question_0_answer_2",
                                value: "30"
                            },
                            3: {
                                title: "sins_question_0_answer_3",
                                value: "40"
                            },
                            4: {
                                title: "sins_question_0_answer_4",
                                value: "50"
                            },
                            5: {
                                title: "sins_question_0_answer_5",
                                value: "60"
                            },
                            6: {
                                title: "sins_question_0_answer_6",
                                value: "80"
                            },
                            7: {
                                title: "sins_question_0_answer_7",
                                value: "100"
                            },
                        }
                    },
                    1: {
                        title: "sins_question_1",
                        type: "multi",
                        answers: {
                            0: {
                                title: "sins_question_1_answer_0",
                                value: "0.3"
                            },
                            1: {
                                title: "sins_question_1_answer_1",
                                value: "0.7"
                            },
                            2: {
                                title: "sins_question_1_answer_2",
                                value: "1"
                            },
                        }
                    }
                }
            },

        };
        return Promise.resolve(sins[id]);
    }
}
