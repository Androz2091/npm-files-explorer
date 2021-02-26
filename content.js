const packageRegex = /^https:\/\/www\.npmjs\.com\/package\/([a-z0-9-]+)|(@[a-z0-9-]+\/[a-z0-9-]+)\/v\/([a-zA-Z0-9.]+)$/;

const url = window.location.href
if (packageRegex.test(url)) {
    const [ packageURL, packageName, scopedPackageName, packageVersion ] = url.match(packageRegex)
    if (packageName || scopedPackageName) {
        const unpkg = `https://unpkg.com/browse/${packageName || scopedPackageName}${packageVersion ? `@${packageVersion}` : ''}/`
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
        secondButton.children[0].textContent = 'Browse files'
        secondButton.children[0].href = unpkg
        const removedClass = secondButton.children[0].className.split(' ').filter((classCSS) => classCSS !== 'c37751f6').join(' ')
        secondButton.children[0].className = `${removedClass} npm-package`
        div[0].appendChild(secondButton)
    }
}
