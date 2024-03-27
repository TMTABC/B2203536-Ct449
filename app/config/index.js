const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        url: process.env.MONGODB_URL || "mongodb+srv://tmtri22052004:O8MS12tRGuNxvADv@cluster0.6byasv6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    }
};

module.exports = config;