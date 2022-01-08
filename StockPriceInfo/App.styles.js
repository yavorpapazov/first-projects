import styled from 'styled-components'

const Wrapper = styled.div`
    .container {
        margin-top: 20px;
    }
	.myForm {
        display: flex;
        flex-direction: column;
        margin: 50px 0;
    }
    .button {
        margin-top: 50px;
    }
    @media (min-width: 600px) {
        .myForm {
            flex-direction: row;
            justify-content: center;
        }
        .button {
            margin: 0 0 0 50px;
        }
    }
`
export default Wrapper