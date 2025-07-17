// Muestra info al hacer clic en tarjetas (igual que antes)
function showInfo(service) {
    const messages = {
        compute: "🖥 Azure Compute: Máquinas virtuales escalables y contenedores.",
        storage: "💾 Azure Storage: Almacenamiento seguro en la nube.",
        ai: "🧠 Azure AI: Inteligencia Artificial con modelos avanzados."
    };
    alert(messages[service]);
}

// Consulta la API de Azure Functions (versión mejorada)
async function fetchAzureResources() {
    try {
        const response = await fetch("/api/azure-resources");
        if (!response.ok) throw new Error("Error al obtener datos");
        
        const data = await response.json();
        renderResources(data);
    } catch (error) {
        document.getElementById("api-response").innerHTML = `
            <div class="error">⚠️ ${error.message}</div>
        `;
    }
}

// Renderiza los recursos con estilos
function renderResources(resources) {
    const apiResponse = document.getElementById("api-response");
    apiResponse.innerHTML = `
        <h3>📦 Recursos en Azure</h3>
        <div class="resources-grid">
            ${resources.map(resource => `
                <div class="resource-card ${resource.status.toLowerCase()}">
                    <h4>${resource.name}</h4>
                    <p><strong>Tipo:</strong> ${resource.type}</p>
                    <p><strong>Estado:</strong> ${resource.status}</p>
                </div>
            `).join("")}
        </div>
    `;
    apiResponse.style.display = "block";
}