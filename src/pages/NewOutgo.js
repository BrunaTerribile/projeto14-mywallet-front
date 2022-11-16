import { PageContainer, Header, Form} from "../assets/styles/style"

export default function NewOutgo() {
    return (
        <PageContainer>
            <Header><h1>Nova saída</h1></Header>
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
                <button>Salvar saída</button>
            </Form>
        </PageContainer>
    )
}