
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCHCoQEYrFL99rPvSSCD2YkQ&part=snippet%2Cid&order=date&maxResults=10';

const content = null || document.getElementById('content-video');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b278baa99bmsha047a638a61862fp188b14jsne2d4999b0c0d',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data; 
}

//autoejecuta la función
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4  justify-between">
                        <h3 class="text-md text-gray-200">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                        </h3>
                        <br>
                        <p class="text-sm text-gray-500">${video.snippet.description}</p>
                        
                    </div>
            </div>
        `).slice(0,1).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();

