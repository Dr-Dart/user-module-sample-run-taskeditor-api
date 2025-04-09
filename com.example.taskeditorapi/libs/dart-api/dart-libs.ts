
/**
 * Compare versions which are formatted as Semantic Version.
 *
 * @param srcVersion Source version
 * @param version Target version.
 * @return Return -1 {@link version} less than {@link srcVersion} or 1 {@link version} greater than {@link srcVersion} otherwise 0.
 *
 * @api-version 3
 * @user
 */
export function compareVersion(srcVersion: string, version: string): number {
    try {
        if (srcVersion === version) {
            return 0;
        }
        const digits = srcVersion.split(".");
        const compareDigits = version.split(".");
        for (let i = 0, length = digits.length; i < length; i++) {
            const nDigit = Number(digits[i]);
            const nCompareDigit = Number(compareDigits[i]);
            if (nDigit > nCompareDigit) {
                return -1;
            } else if (nDigit < nCompareDigit) {
                return 1;
            }
        }
        return 0;
    } catch (e) {
        return 0;
    }
}
