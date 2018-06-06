export default {
    userInfo: {
        email: 'govno@gmail.com',
        full_name: 'Maxim Ignatenkov',
        date_of_birth: '14-11-1994',
        country: 'Russia'
    },
    gameInfo: {
        login: 'Maxonoskiy',
        money: 243,
        gold: 14,
        level: 5,
        default_category: [
            {
                name: 'Films',
                id: '1',
                has: true,
                rating: 3.3,
                need_lvl: 1,
                packs: [
                    {
                        has: true,
                        count_right_answer: 9,
                        id: 'pack1',
                        pack: {
                            price: 20,
                            title: 'TOP films',
                            description: 'easy',
                            asks: [
                                {
                                    number: 1,
                                    ask: ['coffee', 'grapes', 'sob', 'train'],
                                    answer_options: ['Лох, лох, лох...', 'Молодец', 'Лайфхакер', 'Гэй'],
                                    right_answer: 0
                                },
                                {
                                    number: 2,
                                    ask: ['coffee', 'coffee', 'coffee', 'coffee'],
                                    answer_options: ['Ответ1', 'Ответ2', 'Ответ3', 'Ответ4'],
                                    right_answer: 1
                                },
                                {
                                    number: 3,
                                    ask: ['coffee', 'coffee', 'coffee', 'coffee'],
                                    answer_options: ['Ответ1', 'Ответ2', 'Ответ3', 'Ответ4'],
                                    right_answer: 3
                                },
                                {
                                    number: 4,
                                    ask: ['coffee', 'coffee', 'coffee', 'coffee'],
                                    answer_options: ['Ответ1', 'Ответ2', 'Ответ3', 'Ответ4'],
                                    right_answer: 2
                                },
                                {
                                    number: 5,
                                    ask: ['coffee', 'coffee', 'coffee', 'coffee'],
                                    answer_options: ['Ответ1', 'Ответ2', 'Ответ3', 'Ответ4'],
                                    right_answer: 1
                                }
                            ]
                        }
                    },
                    {
                        has: true,
                        count_right_answer: 4,
                        id: 'pack2',
                        pack: {
                            price: 50,
                            title: 'Govno films',
                            description: 'easy',
                            asks: [
                                {
                                    number: 1,
                                    ask: 'Вопрос1',
                                    answer_options: ['Ответ1', 'Ответ2', 'Ответ3', 'Ответ4'],
                                    right_answer: 1
                                }
                            ]
                        }
                    },
                    {
                        has: false,
                        count_right_answer: 1,
                        id: 'pack3',
                        pack: {
                            price: 540,
                            title: 'Marvel films',
                            description: 'medium',
                            asks: []
                        }
                    },
                    {
                        has: false,
                        count_right_answer: 2,
                        id: 'pack4',
                        pack: {
                            price: 230,
                            title: 'DC films',
                            description: 'hard',
                            asks: []
                        }
                    },
                ]
            },
            {
                name: 'Anime',
                id: '2',
                rating: 0.3,
                has: true,
                need_lvl: 1,
                packs: [
                    {
                        count_right_answer: 3,
                        pack: {
                            price: 12,
                            title: 'Amine1',
                            description: 'easy',
                            asks: []
                        }
                    }
                ]
            },
            {
                name: 'Serials',
                id: '3',
                rating: 2.5,
                has: true,
                need_lvl: 1,
                packs: [
                    {
                        count_right_answer: 7,
                        pack: {
                            price: 12,
                            title: 'Amine1',
                            description: 'easy',
                            asks: []
                        }
                    }
                ]
            },
            {
                name: 'Govno',
                id: '4',
                rating: 5,
                has: true,
                need_lvl: 2,
                packs: [
                    {
                        count_right_answer: 6,
                        pack: {
                            price: 12,
                            title: 'Govno',
                            description: 'easy',
                            asks: []
                        }
                    }
                ]
            },
            {
                name: 'Package',
                id: '5',
                rating: 0,
                has: false,
                need_lvl: 6,
                packs: []
            },
            {
                name: 'Package2',
                id: '6',
                rating: 0,
                has: false,
                need_lvl: 6,
                packs: []
            },
            {
                name: 'Package3',
                id: '7',
                rating: 0,
                has: false,
                need_lvl: 6,
                packs: []
            },
            {
                name: 'Package4',
                id: '8',
                rating: 0,
                has: false,
                need_lvl: 7,
                packs: []
            },
            {
                name: 'Package5',
                id: '9',
                rating: 0,
                has: false,
                need_lvl: 8,
                packs: []
            },
            {
                name: 'Package6',
                id: '10',
                rating: 0,
                has: false,
                need_lvl: 9,
                packs: []
            },
            {
                name: 'Package7',
                id: '11',
                rating: 0,
                has: false,
                need_lvl: 10,
                packs: []
            },
            {
                name: 'Package8',
                id: '12',
                rating: 0,
                has: false,
                need_lvl: 11,
                packs: []
            },
            {
                name: 'Package9',
                id: '13',
                rating: 0,
                has: false,
                need_lvl: 12,
                packs: []
            },
            {
                name: 'Package10',
                id: '14',
                rating: 0,
                has: false,
                need_lvl: 13,
                packs: []
            }
        ]
    }
}