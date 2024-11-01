// Gráfico de barras - Fuente de leads
const ctxSource = document.getElementById('leadsSourceChart').getContext('2d');
new Chart(ctxSource, {
    type: 'bar',
    data: {
        labels: ['Website', 'Referral', 'Social Media', 'Email Campaign', 'Direct'],
        datasets: [{
            label: 'Leads Source',
            data: [120, 90, 60, 50, 30],
            backgroundColor: '#1abc9c',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Gráfico de línea - Tasa de conversión por mes
const ctxConversion = document.getElementById('conversionRateChart').getContext('2d');
new Chart(ctxConversion, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Conversion Rate (%)',
            data: [5, 8, 10, 15, 12, 18],
            borderColor: '#34495e',
            backgroundColor: 'rgba(52, 73, 94, 0.2)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false }
        }
    }
});

// Gráfico de pastel - Etapas del proceso de leads
const ctxStage = document.getElementById('leadStageChart').getContext('2d');
new Chart(ctxStage, {
    type: 'pie',
    data: {
        labels: ['New', 'Follow-Up', 'Converted', 'Lost'],
        datasets: [{
            label: 'Lead Stages',
            data: [150, 85, 40, 45],
            backgroundColor: ['#3498db', '#f1c40f', '#2ecc71', '#e74c3c'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});
