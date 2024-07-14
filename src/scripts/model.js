import image from '../images/image.png';
import {TitleBlock} from "./class/TitleBlock";
import {TextBlock} from "./class/TextBlock";
import {ColumnsBlock} from "./class/ColumnsBlock";
import {ImageBlock} from "./class/ImageBlock";
export const model = [
    new TitleBlock(
        'Конструктор сайтов на чистом JavaScript',
        {
            tag: 'h2',
            styles: {
                background: "linear-gradient(to right, #ff0099, #493240)",
                color: "#fff",
                "text-align": "center",
                padding: "1.5rem",
            }
        }
    ),

    new TextBlock(
        'Здесь могла бы быть ваша реклама',
        {
            styles: {
                background: "linear-gradient(to left, #f2994a, #f2c94c)",
                'font-weight': 'bold',
                padding: "1 rem",
                "text-align": "center",
            }
        }
    ),

    new ColumnsBlock(
        [
            "Приложение на чистом JavaScript, без использования библиотек",
            "Узнаешь как работает принцип SOLID и ООП в JavaScript за один курс",
            "JavaScript - это просто, интересно. Научись создавать любые UI своими руками",
        ],
        {
            styles: {
                background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
                color: "#fff",
                "font-weight": "bold",
                padding: "2rem",
            }
        }
    ),

    new ImageBlock(
        image,
        {
            styles: {
                padding: "2rem 0",
                display: "flex",
                "justify-content": "center",
            },
            imageStyles: {
                width: '100%',
                height: 'auto',
            },
            alt: 'Это картинка'
        }
    )
];