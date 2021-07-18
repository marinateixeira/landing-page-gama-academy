import styled from 'styled-components';


export const Head = styled.div`
    display: flex;
    background: black;
    padding-top: 3rem;
    padding-bottom: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: red;
    font-weight: 600;
`

export const SubHead = styled.div`
    display: flex;
    background: black;
    padding-bottom: 2rem;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: red;
    font-weight: 600;
`

export const HomeOffers = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background: black;
`
export const ContentOffers = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    justify-content: start;
    font-size: .9rem;
    color: #fff;
    font-weight: 600;
    border: 1px solid #ddd;
    height: 15rem;
    width: 12rem;
    margin: 2rem;
`

export const Foto = styled.img`
    width: 10rem;
    height: 12rem;
    border: 1px solid #ddd;
    margin: 1rem;
`

export const ButtonComprar = styled.button`
    height: 2rem;
    border: 1px solid #f00;
    background: #f00;
    color: #fff;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
    margin-top: 1rem;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`

export const HomeNewsLetter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    background: black;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Input = styled.input`
    border: 1px solid #ddd;
    height:2rem;
    width:15rem;
    padding: 0 .5rem;
    border-radius: .25rem;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`
export const Button = styled.button`
    height: 2rem;
    border: 1px solid #f00;
    background: #f00;
    color: #fff;
    border-radius: 0.25rem;
    margin-left: 0.5rem;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`
export const TitleContent = styled.span`
    display: block;
    font-size: 1rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`

export const SubTitleContent = styled.span`
    display: block;
    font-size: .8rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: .65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`

export const SuccessMsg = styled.span`
    display: block;
    font-size: .65rem;
    color: blue;
    font-weight: 600;
    margin-top: 1rem;
`
