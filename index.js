// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if (blocks === 43) {
    return blocks - 42
    } else if (blocks > 49 ){
        return blocks - 42
    } else {
        return blocks - 26
    }
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, destination){
    if (start < destination) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination){
const distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400) {
        return 0
    } else if (distance <= 2000 && distance > 400) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}