import { PageContainer, Header, Form } from "../assets/styles/style"

export default function NewEntry() {
    return (
        <>
            <Header><h1>Nova entrada</h1></Header>
            <PageContainer>
                <Form>
                    <input 
                        name="value"
                        placeholder="Valor"
                        type="number"
                        required
                    />
                    <input 
                        name="description"
                        placeholder="Descrição"
                        type="text"
                        required
                        />
                    <button>Salvar entrada</button>
                </Form>
            </PageContainer>
        </>
    )
}