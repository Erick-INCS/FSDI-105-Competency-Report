let item = (title, text) => `<section>
                                <h5>${title}</h5>
                                <p>${text || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quo iste ex quaerat! Odit, optio laudantium. Amet minima unde velit, provident quod nesciunt et aliquam iusto, officia repellendus facilis deserunt!'}</p>
                            </section>`;

const container = document.getElementById("serviceList");

function lorem() {
    let lorems = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime necessitatibus, similique maiores omnis deleniti illo incidunt porro alias, ducimus aliquid quidem quaerat ad non reiciendis iure laboriosam, minima delectus dolorum!',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque earum provident, beatae accusantium saepe unde corporis eos modi impedit possimus iusto porro numquam vel deleniti debitis optio aliquid qui aperiam.',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quis culpa ullam est beatae amet eveniet magni quia doloribus. Maiores eaque, sed architecto facilis a consequatur ipsam sunt quisquam ratione!',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint repellendus, error eum atque excepturi dolorum quasi, soluta molestias perspiciatis rem temporibus dicta, cumque reiciendis praesentium neque dolorem dolor quam architecto.',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ipsam, beatae minus sit tenetur odit ab culpa illum, minima rem suscipit! Possimus veniam ratione facilis repellat autem, nihil dolorum dolores?',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sit neque sint adipisci aliquam. Veritatis voluptate delectus deleniti qui cumque sunt obcaecati voluptates eligendi accusantium, sed, exercitationem eos omnis corrupti.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, perspiciatis. Inventore accusantium ab quasi, autem non ad laudantium dignissimos voluptatem! Reprehenderit, odit quae optio id amet aspernatur autem nostrum velit!',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid minima ratione nam qui, consequatur velit accusantium cupiditate asperiores molestiae quisquam vel repellat autem exercitationem quos fugit at provident perspiciatis eos!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione eos eligendi repudiandae? Dolorem, dolorum illum laudantium asperiores optio excepturi aperiam, dolor quos aliquam ullam, qui voluptatem quasi repudiandae labore.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga voluptatem explicabo error sequi, vitae facere voluptates corporis deleniti. Ad consequatur dolore ratione harum eaque cum alias mollitia laudantium explicabo?'
    ];

    return lorems[Math.floor(Math.random() * lorems.length)];
}

for (const serv in salon.prices) {
    container.innerHTML += item(serv, lorem());
}