console.log('Iniciando');

const admin = {
    nome: "Lucas",
    email: "l@l.com",
    role: "admin",
    criarCurso(){
        console.log("Curso criado!");
    }
}

const user = {
    nome: "Junior",
    email: "j@j.com",
    role: "admin",
    podeCriarCurso: false,
    assistirAula(){
        console.log('Aula iniciada...');
    }
}

if (!user.podeCriarCurso){
    console.error('User não pode criar curso')}



console.log('Gerndo a criação de curso para o usuário "user", aguarde...');
Object.setPrototypeOf(user, admin)
user.criarCurso()
