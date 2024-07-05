function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize !== 0) return false;

    const count = new Map<number, number>();
    for (let card of hand) {
        count.set(card, (count.get(card) || 0) + 1);
    }

    const sortedKeys = Array.from(count.keys()).sort((a, b) => a - b);

    for (let key of sortedKeys) {
        if (count.get(key)! > 0) {
            let num = count.get(key)!;
            for (let i = 0; i < groupSize; i++) {
                if ((count.get(key + i) || 0) < num) return false;
                count.set(key + i, count.get(key + i)! - num);
            }
        }
    }
    return true;
};

console.log(isNStraightHand([1,2,3,6,2,3,4,7,8],3));

console.log(isNStraightHand([1,2,3,4,5],4))