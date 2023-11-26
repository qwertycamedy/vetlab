const meta = {
    city: '',
    address: '',
    tel: '',
    //заголовок и описание на первом экране
    hero_title: '',
    hero_descr: '',
    //картинка на первом экране (лапу на заднем фоне не нужно добавлять, она отдельно идет на фронте)
    hero_img: '',
    //время записи
    appointment_time: '',
    //время записи в процедурном кабинете
    appointment_time_treatment: '',
}

const about = [
    {
        title: '',
        descr: '',
        //дополнительно можно это внедрить:
        color: '', // например #B392AC
        width_type: '', // big/small
    },
]

const team = [
    {
        name: '',
        list: ['', '', ''],
        img: '',
    },
]


const services = [
    {
        //id должен совпадать с id принадлежащей услуги
        id: '',

        title: '',
        img: '',
        //дополнительно можно это внедрить:
        color: '', // например #B392AC
        width: '', // 560px
    },
]

const service = {
    id: '',
    title: '',
    pricelist: [
        {
            name: '',
            price: '',
        },
    ],
}

const reviews = [
    {
        img: '',
    },
]

const faq = [
    {
        title: '',
        descr: '',
    },
]

const news = [
    {
        //id должен совпадать с id принадлежащей услуги
        id: '',

        title: '',
        descr: '',
        date: '',
        img: '',
    },
]

const newstory = {
    id: '',
    title: '',
    descr: '',
    date: '',
    img: '',
}

const clients = [
    {
        img: '',
    },
]

const auth = {
    tel: '',
}

const sms = {
    code: '',
}

const profile = {
    name: '',
    pets: [
        {
            name: '',
            birth_date: '',
            breed: '',
            gender: '',
            appointments: [
                {
                    date: '',
                },
                {
                    date: '',
                    result_file: '',
                },
                {
                    date: '',
                },
            ],
        },
    ],
}
