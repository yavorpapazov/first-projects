import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
    height: 100%;
    button {
        border-radius: 0 0 20px 20px;
        width: 100%
    }
    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px;
    }
    div {
        font-family: Arial, Helvatica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`
export default Wrapper