import { FourNumArray, SixNumArray, ThreeNumArray } from "./dart-api";

/**
 * 3D coordinate system notation
 *
 * @enum
 * @api-version 1
 * @user
 */
export const EulerType = {
    /**
     * Orientation is RotZ*RotY*RotZ
     *
     * @api-version 1
     * @user
     */
    ZYZ: 0,
    /**
     * Orientation is RotZ*RotY*RotX
     *
     * @api-version 1
     * @user
     */
    ZYX: 1,
    /**
     * Orientation is RotX*RotY*RotZ
     *
     * @api-version 1
     * @user
     */
    XYZ: 2,

}  as const;
/**
 * @ignore
 */
export type EulerType = typeof EulerType[keyof typeof EulerType];

/**
 * 3D coordinate system structure
 *
 * @enum
 * @api-version 1
 * @user
 */
export interface Coordinate {
    /**
     * Pose element.
     *
     * @enum
     * @api-version 1
     * @user
     */
    pose:SixNumArray,

    /**
     * Coordinate system notation
     *
     * @enum
     * @api-version 1
     * @user
     */
    type: EulerType
}

/**
 * 3D homogeneous matrix structure
 *
 * @enum
 * @api-version 1
 * @user
 */
export type MatrixH3D = [FourNumArray, FourNumArray, FourNumArray, FourNumArray];



/**
 * IMathLibrary have a math-related API.
 *
 * @api-version 1
 * @user
 */
export interface IMathLibrary {

    /**
     * Calculate the cross product of two vectors.
     *
     * @param vector1 First vector
     * @param vector2 Second vector
     * @return Result vector of cross product
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray} from "dart-api";
     *  import { IMathLibrary, } from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const vec = [1,0,0] as ThreeNumArray;
     *          const vec2 = [0,1,0] as ThreeNumArray;
     *          const vec3 = mathLibrary.crossProduct(vec, vec2);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    crossProduct(vector1: ThreeNumArray, vector2: ThreeNumArray): ThreeNumArray

    /**
     * Calculate the dot product of two vectors.
     *
     * @param vector1 First vector
     * @param vector2 Second vector
     * @return Result scalar of dot product
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray} from "dart-api";
     *  import { IMathLibrary, } from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const vec = [1,0,0] as ThreeNumArray;
     *          const vec2 = [0,1,0] as ThreeNumArray;
     *          const vec3 = mathLibrary.dotProduct(vec, vec2);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    dotProduct(vector1: ThreeNumArray, vector2: ThreeNumArray): number

    /**
     * Caculate the square of a vector's magnitude.
     *
     * @param vector Vector
     * @return Vector magnitude squared
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray} from "dart-api";
     *  import { IMathLibrary, } from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const vec = [1,0,0] as ThreeNumArray;
     *          const magnitudeSQ = mathLibrary.magnitudeSQ(vec);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    magnitudeSQ(vector: ThreeNumArray): number

    /**
     * Calculate the magnitude of the vector.
     *
     * @param vector Vector
     * @return Vector magnitude
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray} from "dart-api";
     *  import { IMathLibrary, } from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const vec = [1,0,0] as ThreeNumArray;
     *          const magnitude = mathLibrary.magnitude(vec);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    magnitude(vector: ThreeNumArray): number

    /**
     * Determines whether the magnitude of the vector is 0.
     *
     * @param vector Vector
     * @return boolean
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray} from "dart-api";
     *  import { IMathLibrary, } from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const vec = [1,0,0] as ThreeNumArray;
     *          const isZero = mathLibrary.isVectorZero(vec);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    isVectorZero(vector: ThreeNumArray): boolean

    /**
     * Calculate the unit vector.
     *
     * @param vector1 Vector
     * @return Unit vector
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray} from "dart-api";
     *  import { IMathLibrary, } from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const vec = [50,10,0] as ThreeNumArray;
     *          const unitVec = mathLibrary.unitVector(vec);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    unitVector(vector1: ThreeNumArray): ThreeNumArray

    /**
     * Calculates a matrix in which each axis direction of the input matrix is corrected to be perpendicular to each other.
     *
     * @param hMat 3D Pose Matrix
     * @return A matrix in which each axis is perpendicular to each other
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const matrix = [[0.9, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] as  MatrixH3D
     *          const validMatrix = mathLibrary.makeValidMatrix(matrix);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    makeValidMatrix(hMat: MatrixH3D): MatrixH3D

    /**
     * Calculate the three-dimensional pose matrix with the pose denoted by Euler.
     *
     * @param pose Pose values defined in zyz notation.
     * @return A three-dimensional pose matrix
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const pose = {pose:[100,0,0,30,45,0] as SixNumArray, type:EulerType.ZYX} as Coordinate
     *          const matrix = mathLibrary.eulerToMatrix(pose);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    eulerToMatrix(pose: Coordinate): MatrixH3D

    /**
     * Calculate the three-dimensional pose matrix with the pose denoted by Euler ZYZ.
     *
     * @param pose Pose values defined in zyz notation.
     * @return A three-dimensional pose matrix
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const pose = {pose:[100,0,0,30,45,0] as SixNumArray, type:EulerType.ZYZ} as Coordinate
     *          const matrix = mathLibrary.eulerToMatrix(pose);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    eulerZYZToMatrix(pose: Coordinate): MatrixH3D

    /**
     * Calculate the three-dimensional pose matrix with the pose denoted by Euler ZYX.
     *
     * @param pose Pose values defined in zyx notation.
     * @return A three-dimensional pose matrix
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const pose = {pose:[100,0,0,30,45,0] as SixNumArray, type:EulerType.ZYX} as Coordinate
     *          const matrix = mathLibrary.eulerToMatrix(pose);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    eulerZYXToMatrix(pose: Coordinate): MatrixH3D

    /**
     * Calculate the three-dimensional pose matrix with the pose denoted by Euler XYZ.
     *
     * @param pose Pose values defined in xyz notation.
     * @return A three-dimensional pose matrix
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const pose = {pose:[100,0,0,30,45,0] as SixNumArray, type:EulerType.XYZ} as Coordinate
     *          const matrix = mathLibrary.eulerToMatrix(pose);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
     eulerXYZToMatrix(pose: Coordinate): MatrixH3D

    /**
     * Calculate the pose denoted by Euler ZYZ with the three-dimensional pose matrix
     *
     * @param hMat pose A three-dimensional pose matrix
     * @param flip
     * @return Pose values defined in zyz notation.
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const matrix = [[0.9, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] as  MatrixH3D
     *          const pose = mathLibrary.matrixToEulerZYZ(matrix);
     *
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    matrixToEulerZYZ(hMat: MatrixH3D, flip?: boolean): Coordinate

    /**
     * Calculate the pose denoted by Euler ZYX with the three-dimensional pose matrix
     *
     * @param hMat pose A three-dimensional pose matrix
     * @param flip
     * @return Pose values defined in zyx notation.
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const matrix = [[0.9, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] as  MatrixH3D
     *          const pose = mathLibrary.matrixToEulerZYX(matrix);
     *
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    matrixToEulerZYX(hMat: MatrixH3D, flip?: boolean): Coordinate

    /**
     * Calculate the pose denoted by Euler XYZ with the three-dimensional pose matrix
     *
     * @param hMat pose A three-dimensional pose matrix
     * @param flip
     * @return Pose values defined in xyz notation.
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const matrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] as  MatrixH3D
     *          const pose = mathLibrary.matrixToEulerXYZ(matrix);
     *
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
     matrixToEulerXYZ(hMat: MatrixH3D, flip?: boolean): Coordinate

    /**
     * Perform coordinate system multiplication on euler values. (eulerA * eulerB)
     *
     * @param eulerA First Value
     * @param eulerB Second value
     * @return Calculated value of coordinate multiplication.
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const pose1 = {pose:[100,0,0,30,45,0] as SixNumArray, type:EulerType.ZYX} as Coordinate
     *          const pose2 = {pose:[0,100,0,-30,0,0] as SixNumArray, type:EulerType.ZYX} as Coordinate
     *          const pose3 = mathLibrary.eulerMul(pose1, pose2, EulerType.ZYX);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    eulerMul(eulerA: Coordinate, eulerB: Coordinate, ref: EulerType): Coordinate

    /**
     * matrix multiplication (mat_a * mat_b)
     *
     * @param matA First Matrix
     * @param matB Second Matrix
     * @return Calculated value of matrix multiplication.
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const matrix1 = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] as  MatrixH3D
     *          const matrix2 = [[0, 1, 0, 0], [-1, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] as  MatrixH3D
     *          const matrix3 = mathLibrary.eulerMul(matrix1, matrix2);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    matMul(matA: MatrixH3D, matB: MatrixH3D): MatrixH3D

    /**
     * Calculate the inverse euler values
     *
     * @param euler A three-dimensional euler values
     * @return Inverse value
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const pose1 = {pose:[100,0,0,30,45,0] as SixNumArray, type:EulerType.ZYX} as Coordinate
     *          const invPose = mathLibrary.eulerMul(pose1);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    inverseEuler(euler: Coordinate): Coordinate

    /**
     * Calculate the inverse matrix
     *
     * @param hMat A three-dimensional pose matrix
     * @return Inverse matrix
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const matrix1 = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]] as  MatrixH3D
     *          const invMatrix = mathLibrary.inverse(matrix1);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    inverse(hMat: MatrixH3D): MatrixH3D

    /**
     * Calculate the angle between two vectors.
     *
     * @param vector1 First vector
     * @param vector2 Second vector
     * @return The angle between two vectors
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray} from "dart-api";
     *  import { IMathLibrary, } from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const vec = [1,0,0] as ThreeNumArray;
     *          const vec2 = [0,1,0] as ThreeNumArray;
     *          const angle = mathLibrary.calculateDegreeAngleBetweenTwoVector(vec, vec2);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    calculateDegreeAngleBetweenTwoVector(vector1: ThreeNumArray, vector2: ThreeNumArray): number

    /**
     * Define a three-dimensional pose matrix using three points.
     *
     * @param origin origin
     * @param pointAlongX A point on the x-axis
     * @param pointOnXyPlane A point on the xy plane.
     * @return A three-dimensional pose matrix
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const vec = [0,0,0] as ThreeNumArray;
     *          const vec2 = [1,0,0] as ThreeNumArray;
     *          const vec3 = [1,1,0] as ThreeNumArray;
     *          const coord = mathLibrary.calculateMatrixUsingThreePoints(vec, vec2, vec3);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    calculateMatrixUsingThreePoints(origin: ThreeNumArray, pointAlongX: ThreeNumArray, pointOnXyPlane: ThreeNumArray): MatrixH3D | null

    /**
     * Changes the Notation of the input Coordinate and returns it.
     *
     * @param pose original pose
     * @param type new notation
     *
     * @api-verion 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, ThreeNumArray, SixNumArray} from "dart-api";
     *  import { IMathLibrary, MatrixH3D, EulerType} from "dart-api-math";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const mathLibrary = context.getSystemLibrary(Context.MATH_LIBRARY) as IMathLibrary;
     *      useEffect(() => {
     *          const poseWithZYX = {pose:[100,0,0,30,45,0] as SixNumArray, type:EulerType.ZYX} as Coordinate
     *          const poseWithZYZ = mathLibrary.convertEuler(poseWithZYX, EulerType.ZYZ);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    convertEuler(pose:Coordinate, type: EulerType) : Coordinate;
}
