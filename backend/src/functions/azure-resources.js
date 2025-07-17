const { app } = require('@azure/functions');

app.http('azure-resources', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        // Datos simulados de recursos Azure
        const resources = [
            { 
                name: "VM-Linux-Server", 
                type: "Virtual Machine", 
                status: "Running" 
            },
            { 
                name: "Storage-Account-Data", 
                type: "Blob Storage", 
                status: "Active" 
            }
        ];

        return {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" // Solo para desarrollo
            },
            body: JSON.stringify(resources)
        };
    }
});