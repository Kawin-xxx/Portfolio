export default {
    header: {
        logoText: 'Логотип.',
        openMenu: 'Открыть меню.',
        closeMenu: 'Закрыть меню.',
        nav: ['about', 'experience', 'skills', 'projects', 'contacts'],
        navList: {
            about: 'Обо мне',
            experience: 'Опыт',
            skills: 'Навыки',
            projects: 'Проекты',
            contacts: 'Контакты'
        }
    },

    about: {
        title: 'Привет, меня зовут',
        name: 'Катя',
        nameFull: 'Екатерина Олейникова',
        imageText: 'Автопортрет.',
        profession: {
            span: 'Я',
            name: 'frontend-developer'
        },
        description: 'Люблю фронтенд и все, что с ним связано! Имею диплом бакалавра по направлению "Прикладная математика и информатика", а также 3 года коммерческого опыта.',
        button: 'Скачать резюме'
    },

    experience: {
        title: 'Опыт',
        experienceList: {
            university: {
                title: 'Новосибирский государственный технический университет (НГТУ) - направление: "Прикладная математика и информатика"',
                description: 'Освоила широкий спектр языков программирования и технологий, в том числе HTML, CSS, JavaScript и PostgreSQL. Активно участвовала в командных соревнованиях CTF, где наша команда неоднократно занимала призовые места 🏆).',
                yearStart: '2018',
                yearEnd: '2022'
            },
            diplom: {
                title: 'Выпускная квалификационная работа (ВКР)',
                description: 'Разработала адаптивный веб-сайт по тематике настольных игр для ИП Гейвас Л.А., используя 1С-Битрикс, PHP, HTML, CSS, Bootstrap и базы данных. Проект успешно завершен в рамках дипломной работы.',
                yearStart: '2021',
                yearEnd: '2022'
            },
            htmlAcademy: {
                title: 'HTML Academy',
                description: 'Освоила основы верстки адаптивных и кроссбраузерных сайтов, познакомилась с современными библиотеками. Успешно завершила стажировку и получила сертификат.',
                yearStart: '2021',
                yearEnd: '2022'
            },
            devs: {
                title: 'Компания 23 devs',
                description: 'Участвовала в разработке веб-приложений на Angular, создавала новые модули с нуля, проводила код-ревью, писала e2e и unit тесты,  выполняла другие задачи по улучшению проекта.',
                yearStart: '2023',
                yearEnd: '2024'
            },
            newCompany: {
                title: 'Здесь можете быть ваша компания :)',
                description: 'Смогу помочь вашей компании стать лучше благодаря своему опыту и знаниям!',
                yearStart: '2025',
                yearEnd: '...'
            }
        }
    },

    skills: {
        title: 'Навыки',
        skillsList: {
            sites: {
                title: 'Разработка сайтов',
                description: 'Создаю кроссбраузерные, адаптивные веб-сайты с использованием передовых технологий. Гарантирую качественную верстку и удобство для пользователя на всех устройствах.',
            },
            tests: {
                title: 'Автоматизация тестирования',
                description: 'Разрабатываю unit и интеграционные тесты для повышения стабильности и надежности приложений. Использую современные инструменты для предотвращения ошибок и упрощения отладки.',
            },
            design: {
                title: 'Веб-дизайн',
                description: 'Создаю современные, удобные и визуально привлекательные интерфейсы, адаптированные под потребности пользователей. Ориентируюсь на тренды и обеспечиваю уникальный стиль для каждого проекта.',
            },
            optimazation: {
                title: 'Оптимизация производительности',
                description: 'Повышаю скорость работы сайтов, сокращая время загрузки и улучшая общую производительность, чтобы пользователи могли получать контент быстрее и без задержек.',
            }
        },
        technologiesTitle: 'Стек технологий',
        stackIconText: 'Иконка '
    },

    projects: {
        title: 'Проекты',
        imageText: 'Изображение проекта',
        categories: {
            design: 'Дизайн',
            sites: 'Сайты',
            all: 'Все'
        }
    },

    contacts: {
        title: 'Контакты',
        socialText: 'Напишите мне в социальных сетях',
        formText: 'Или оставьте ваше сообщение в форме',
        formFields: {
            name: 'Имя',
            email: 'Email',
            phone: 'Телефон',
            message: 'Сообщение'
        },
        buttonSend: 'Отправить',
        buttonClear: 'Очистить'
    },

    footer: {
        text: 'Разработано Екатериной Олейниковой в 2024 году',
        svgDescription: 'Значок копирайта'
    }
};
