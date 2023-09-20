const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [{
        label: 'Clothes Sales',
        backgroundColor: 'green',
        borderWidth: 2,
        data: [77,20,96,88],
    }],
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
            },
        },
    },
};

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, config);

myChart.options.plugins.tooltip = {
    callbacks: {
        label: function (context) {
            return `Sales: ${context.parsed.y}`;
        },
    },
};

const chartAnimation = anime({
    targets: myChart.data.datasets[0].data,
    delay: anime.stagger(200),
    duration: 3000,
    loop: true,
    update: function (anim) {
        myChart.update();
    },
});
