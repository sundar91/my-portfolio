import './index.scss'
const AnimatedLetters = ({ letters, className, initialIndex }) =>
{

    return letters.map((letter, i) =>
    {
        return <span key={letter + i} className={`${className} _${initialIndex + i}`}>
            {letter}
        </span>
    })

}

export default AnimatedLetters