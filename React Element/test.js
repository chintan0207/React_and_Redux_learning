
// const h2 = React.createElement('h2', {}, 'h2 heading Tag');
// const root = document.getElementById('root');
// ReactDOM.render(h2, root);

const container = React.createElement(
    'div', { className: "container", id: "container" },
    [
        React.createElement("p", { key: 1 },
            "Use React Developer Tools to inspect React components, edit props and state, and identify performance problems."),
        React.createElement(
            "img",
            {
                key: 2,
                src: "./React_Logo_SVG.svg.png",
                style: { width: "300px", backgroundColor: "black", borderRadius: 10 }
            }),
        React.createElement(
            "p",
            {
                key: 3,
            }, "The React Logo"),
        React.createElement("form",
            {
                key: 4,
                style: { width: "300px", padding: 20, border: "1px solid black" }
            },
            [
                React.createElement('div', {key:1, className: "input-group" },
                    [
                        React.createElement('lable', {key:1, htmlFor: "userName" }, "UserName: "),
                        React.createElement('input', {key:2, className: "userName", name: "userName" })

                    ]),
                React.createElement('div', { key:2, className: "input-group" },
                    [
                        React.createElement('lable', {key:1, htmlFor: "password" }, "Password: "),
                        React.createElement('input', { key:2,className: "password", name: "password", type:"password" })

                    ])

            ]
        )

    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
