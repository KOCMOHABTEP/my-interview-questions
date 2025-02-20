function auth() {
    return new Promise((resolve, reject) => {
        asyncAuth((error, data) => {
            if (error) return reject(error)

            resolve(data)
        })
    })
}

async function tryAuth(n) {
    try {
        const response = await auth();
        return response;
    } catch (err) {
        n-=1;
        if (n === -1) throw err;
        return tryAuth(n);
    }
}

tryAuth(10).then(data => {}).catch(err => {});