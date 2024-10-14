export const errorHandler = (msg) => {
    switch(msg) {
        case 'no args':
        case 'invalid command':
            console.log('Invalid input!');
        break
        default:
            console.log('Operation failed!');
    }
}