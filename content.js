const packageRegex = /^https:\/\/www\.npmjs\.com\/package\/([a-z0-9-]+|@[a-z0-9-]+\/[a-z0-9-]+)(?:\/v\/)?([a-zA-Z0-9.]+)?$/;

const generateButton = (version) => {

    const currentButton = document.getElementById('npm-files-explorer-btn');
    if (currentButton) currentButton.remove();

    const url = window.location.href
    if (packageRegex.test(url)) {
        const [ packageURL, packageName, packageVersion ] = url.match(packageRegex)
        const realPackageVersion = version || packageVersion;
        if (packageName) {
            const unpkg = `https://unpkg.com/browse/${packageName}${realPackageVersion ? `@${realPackageVersion}` : ''}/`
            const div = document.getElementsByClassName('fdbf4038')
            const elements = document.getElementsByClassName('w-100')
            let button
            for (let element of elements) {
                if (
                    element.children[0]
                    && element.children[0].className
                    && typeof element.children[0].className === 'string'
                    && element.children[0].className.includes('c37751f6')
                ) {
                    button = element
                }
            }
            const secondButton = button.cloneNode(true)
            secondButton.id = 'npm-files-explorer-btn';
            secondButton.children[0].textContent = 'Browse files'
            secondButton.children[0].href = unpkg
            const removedClass = secondButton.children[0].className.split(' ').filter((classCSS) => classCSS !== 'c37751f6').join(' ')
            secondButton.children[0].className = `${removedClass} npm-package`
            div[0].appendChild(secondButton)
        }
    }

}

generateButton();

/* Handle changes of versions */

document.querySelector('#package-tab-versions').addEventListener('click', () => {

    const [ packageURL, packageName ] = window.location.href.match(packageRegex)
    let index = 0;
    const interval = setInterval(() => {
        console.log('interval')
        if (index > 100) clearInterval(interval);
        const elements = document.querySelectorAll(`a[href*='${packageName}/v']`);
        if (elements.length > 0) {
            clearInterval(interval);
            for (let element of elements) {
                element.addEventListener('click', () => {
                    generateButton(element.title);
                });
            }
        }
    }, 200);
});
