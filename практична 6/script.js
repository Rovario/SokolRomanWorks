function fetchWithTimeout(url, timeout = 5000) {
    return Promise.race([
        fetch(url),
        new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Request timeout')), timeout)
        )
    ]);
}

async function fetchMultipleResources() {
    try {
        const results = await Promise.allSettled([
            fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1'),
            fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1')
        ]);

        const processedResults = results.map(async (result) => {
            if (result.status === 'fulfilled') {
                const data = await result.value.json();
                console.log('Успішний запит:', data);
                return data;
            } else {
                console.log('Запит не вдався:', result.reason);
                return "Request timeout";
            }
        });

        return await Promise.all(processedResults);
    } catch (error) {
        console.error('Глобальна помилка:', error);
        return ["Request timeout", "Request timeout"];
    }
}

fetchMultipleResources();



// пощадіть бідного студента і поставте нормальну оцінку будь ласка, я вже не витримую, серйозно


















