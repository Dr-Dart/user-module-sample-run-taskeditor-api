import i18next, { i18n, Resource, TOptions } from "i18next";
import React, { RefObject } from "react";
import * as ReactDOM from "react-dom";
import { initReactI18next, TFunction } from "react-i18next";
import stringResources from "../../src/assets/langs";
const packageName = (() => {
    try {
        return require("../../manifest.json").packageName;
    } catch (e) {
        return "unknown";
    }
})();


// [START] THEME API /////////////////////////
/**
 * Declare for @mui/material/Button
 * - https://mui.com/material-ui/api/button
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/Button' {
    /**
     * An interface to override Button's 'variant' props.
     *
     * @api-version 1
     * @user
     */
    interface ButtonPropsVariantOverrides {
        /**
         * A variant of a button intended for long press.
         *
         * @api-version 1
         * @user
         */
        longPressed: true;
    }
}
/**
 * Declare for @mui/material/ToggleButton
 * - https://mui.com/material-ui/api/toggle-button
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/ToggleButton' {
    /**
     * An interface to override ToggleButton's 'color' props.
     *
     * @api-version 1
     * @user
     */
    interface ToggleButtonPropsColorOverrides {
        /**
         * A color of a toggle button intended for used to provide information that is not important to the user.
         *
         * @api-version 1
         * @user
         */
        standard: true;
    }
}
/**
 * Declare for @mui/material/Checkbox
 * - https://mui.com/material-ui/api/checkbox
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/Checkbox' {
    /**
     * An interface to override Checkbox's 'color' props.
     *
     * @api-version 1
     * @user
     */
    interface CheckboxPropsColorOverrides {
        /**
         * A color of a checkbox intended for used to provide information that is not important to the user.
         *
         * @api-version 1
         * @user
         */
        standard: true;
    }
}
/**
 * Declare for @mui/material/Radio
 * - https://mui.com/material-ui/api/radio
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/Radio' {
    /**
     * An interface to override Radio's 'color' props.
     *
     * @api-version 1
     * @user
     */
    interface RadioPropsColorOverrides {
        /**
         * A color of a radio intended for used to provide information that is not important to the user.
         *
         * @api-version 1
         * @user
         */
        standard: true;
    }
}
/**
 * Declare for @mui/material/Switch
 * - https://mui.com/material-ui/api/switch
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/Switch' {
    /**
     * An interface to override Switch's 'color' props.
     *
     * @api-version 1
     * @user
     */
    interface SwitchPropsColorOverrides {
        /**
         * A color of a switch intended for used to provide information that is not important to the user.
         *
         * @api-version 1
         * @user
         */
        standard: true;
    }
}
/**
 * Declare for @mui/material/CircularProgress
 * - https://mui.com/material-ui/api/circular-progress
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/CircularProgress' {
    /**
     * An interface to override CircularProgress's 'color' props.
     *
     * @api-version 1
     * @user
     */
    interface CircularProgressPropsColorOverrides {
        /**
         * A color of a circular progress intended for used to provide information that is not important to the user.
         *
         * @api-version 1
         * @user
         */
        standard: true;
    }
}
/**
 * Declare for @mui/material/LinearProgress
 * - https://mui.com/material-ui/api/linear-progress
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/LinearProgress' {
    /**
     * An interface to override LinearProgress's 'color' props.
     *
     * @api-version 1
     * @user
     */
    interface LinearProgressPropsColorOverrides {
        /**
         * A color of a linear progress intended for used to provide information that is not important to the user.
         *
         * @api-version 1
         * @user
         */
        standard: true;
    }
}
/**
 * Declare for @mui/material/InputBase
 * - https://mui.com/material-ui/api/input-base
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/InputBase' {
    /**
     * An interface to override InputBase's 'color' props.
     *
     * @api-version 1
     * @user
     */
    interface InputBasePropsColorOverrides {
        /**
         * A color of a inputbase intended for used to provide information that is not important to the user.
         *
         * @api-version 1
         * @user
         */
        standard: true;
    }
}
/**
 * Declare for @mui/material/TextField
 * - https://mui.com/material-ui/api/text-field
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/TextField' {
    /**
     * An interface to override TextField's 'color' props.
     *
     * @api-version 1
     * @user
     */
    interface TextFieldPropsColorOverrides {
        /**
         * A color of a text field intended for used to provide information that is not important to the user.
         *
         * @api-version 1
         * @user
         */
        standard: true;
    }
}
/**
 * Declare for @mui/material/SvgIcon
 * - https://mui.com/material-ui/api/svg-icon
 *
 * @api-version 1
 * @user
 */
declare module '@mui/material/SvgIcon' {
    /**
     * An interface to override SvgIcon's 'color' props.
     *
     * @api-version 1
     * @user
     */
    interface SvgIconPropsColorOverrides {
        /**
         * A color of a svg icon intended for used to represent primary icon elements for a user.
         *
         * @api-version 1
         * @user
         */
        main: true;
        /**
         * A color of a svg icon intended for used to represent secondary icon elements for a user.
         *
         * @api-version 1
         * @user
         */
        sub: true;
        /**
         * A color of a svg icon intended for used to represent emphasis icon elements for a user.
         *
         * @api-version 1
         * @user
         */
        point: true;
        /**
         * A color of a svg icon intended for used to represent status activate icon elements for a user.
         *
         * @api-version 2
         * @user
         */
        statusOn: true;
        /**
         * A color of a svg icon intended for used to represent status deactivate icon elements for a user.
         *
         * @api-version 2
         * @user
         */
        statusOff: true;
    }
}
// [END] THEME API /////////////////////////


// [START] DRAS API /////////////////////////
/**
 * If you enter this value in an option, it will be ignored or follow the global setting depending on the situation.
 * @api-version 2
 * @user
 */
 export const DR_NONE = -10000;
 /**
 * @ignore
 */
 export type DR_NONE = typeof DR_NONE;

/**
 * An array of numbers of size 2.
 * @api-version 1
 * @user
 */
export type TwoNumArray = [number, number];
/**
 * An array of numbers of size 3.
 * @api-version 1
 * @user
 */
export type ThreeNumArray = [number, number, number];
/**
 * An array of numbers of size 4.
 * @api-version 1
 * @user
 */
export type FourNumArray = [number, number, number, number];
/**
 * An array of numbers of size 5.
 * @api-version 1
 * @user
 */
export type FiveNumArray = [number, number, number, number, number];
/**
 * An array of numbers of size 6.
 * @api-version 1
 * @user
 */
export type SixNumArray = [number, number, number, number, number, number];
/**
 * An array of numbers of size 8.
 * @api-version 1
 * @user
 */
export type EightNumArray = [number, number, number, number, number, number, number, number];
export type eigthNumArray = [number, number, number, number, number, number, number, number];
/**
 * An array of numbers of size 9.
 * @api-version 1
 * @user
 */
export type NineNumArray = [number, number, number, number, number, number, number, number, number];
/**
 * An array of numbers of size 10.
 * @api-version 1
 * @user
 */
export type TenNumArray = [number, number, number, number, number, number, number, number, number, number];
/**
 * An array of numbers of size 16.
 * @api-version 1
 * @user
 */
export type SixteenNumArray = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
/**
 * An array of numbers of size 20.
 * @api-version 1
 * @user
 */
export type TwentyNumArray = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
/**
 * A two-dimensional array of numbers with 2 rows and 3 columns.
 * @api-version 1
 * @user
 */
export type TwoThreeNumArray = [ThreeNumArray, ThreeNumArray];
/**
 * A two-dimensional array of numbers with 3 rows and 6 columns.
 * @api-version 1
 * @user
 */
export type ThreeSixNumArray = [SixNumArray, SixNumArray, SixNumArray];
/**
 * A two-dimensional array of numbers with 4 rows and 6 columns.
 * @api-version 1
 * @user
 */
export type FourSixNumArray = [SixNumArray, SixNumArray, SixNumArray,SixNumArray];
/**
 * Input parameter of the setRemoteControl API.
 * Array of io mapping function trigger information of size 10.
 * @api-version 1
 * @user
 */
 export type ConfigIoFunctionList = [ConfigIoFunction, ConfigIoFunction
                                    , ConfigIoFunction, ConfigIoFunction
                                    , ConfigIoFunction, ConfigIoFunction
                                    , ConfigIoFunction, ConfigIoFunction
                                    , ConfigIoFunction, ConfigIoFunction];

/**
 * Property data of safety zone.
 * Depending on the Zone Type, it is either SafetyZonePropertySpaceLimit or SafetyZonePropertyLocalZone.
 * @api-version 1
 * @system
 */
export type SafetyZonePropertyData = SafetyZonePropertySpaceLimit | SafetyZonePropertyLocalZone;

/**
 * Input parameter of add Safety Zone API.
 * It is used when adding a space-limited zone.
 * @api-version 1
 * @system
 */
export type SafetyZonePropertySpaceLimit = {
    /**
     * Space limit zone information.
     * @api-version 1
     * @system
     */
    spaceLimitZone: {
        /**
         * Inspection type.  0:Body, 1:TCP
         * @api-version 1
         * @system
         */
        inspectionType: number;
        /**
         * Information on overriding joint limit values per each joint.
         * @api-version 1
         * @system
         */
        jointRangeOverride: LocalZonePropertyJointRange;
        /**
         * Whether to set up dynamic zone.
         * @api-version 1
         * @system
         */
        dynamicZoneEnable: number;
        /**
         * Whether to check the inner area(0) or the outer area(1).
         * @api-version 1
         * @system
         */
        insideZoneDetection: number; // 0 or 1
    };
};

/**
 * Input parameter of add API.
 * It is used when adding a local zone.
 * @api-version 1
 * @system
 */
export type SafetyZonePropertyLocalZone = {
    /**
     * Local zone information.
     * @api-version 1
     * @system
     */
    localZone: {
        /**
         * Information on overriding joint limit values per each joint.
         * @api-version 1
         * @system
         */
        jointRangeOverride: LocalZonePropertyJointRange;
        /**
         * Information on overriding joint speed values per each joint.
         * @api-version 1
         * @system
         */
        jointSpeedOverride: LocalZonePropertyJointSpeed;
        /**
         * Information on overriding TCP force limit.
         * @api-version 1
         * @system
         */
        tcpForceOverride: LocalZonePropertyTcpForce;
        /**
         * Information on overriding TCP power limit.
         * @api-version 1
         * @system
         */
        tcpPowerOverride: LocalZonePropertyTcpPower;
        /**
         * Information on overriding TCP speed limit.
         * @api-version 1
         * @system
         */
        tcpSpeedOverride: LocalZonePropertyTcpSpeed;
        /**
         * Information on overriding TCP momentum limit.
         * @api-version 1
         * @system
         */
        tcpMomentumOverride: LocalZonePropertyTcpMomentum;
        /**
         * Information on overriding collision sensitivity.
         * @api-version 1
         * @system
         */
        collisionOverride: LocalZonePropertyCollision;
        /**
         * Information on overriding speed rate.
         * @api-version 1
         * @system
         */
        speedRate: LocalZonePropertySpeedRate;
        /**
         * Information on overriding collision safety violation stop mode.
         * @api-version 1
         * @system
         */
        collisionViolationStopmodeOverride: LocalZonePropertyCollisionStopMode;
        /**
         * Information on overriding force safety violation stop mode.
         * @api-version 1
         * @system
         */
        forceViolationStopmodeOverride: LocalZonePropertyTcpSlfStopMode;
        /**
         * Information on overriding tool orienation limit.
         * @api-version 1
         * @system
         */
        toolOrientationLimitOverride: LocalZonePropertyToolOrientation;
        /**
         * Whether to set up dynamic zone.
         * @api-version 1
         * @system
         */
        dynamicZoneEnable: number;

        /**
         * Whether to check the inner area(0) or the outer area(1).#321
         * @api-version 1
         * @system
         */
        insideZoneDetection: number; // 0 or 1

        /**
         * Information on overriding led light.
         * @api-version 1
         * @system
         */
        ledOverride: number; // 0 or 1
        /**
         * Whether to use the nudge function.
         * @api-version 1
         * @system
         */
        nudgeEnable: number;
        /**
         * Whether to allow less-safe(dangerous) work.
         * @api-version 1
         * @system
         */
        allowLessSafeWork: number; // 0 or 1
        /**
         * Whether to override the reducer mode.
         * @api-version 1
         * @system
         */
        reduceOverride: number; // 0 or 1
        /**
         * Whether it is a collaborative workspace.
         * @api-version 1
         * @system
         */
        collaborativeZone: number; // 0 or 1
    };
};

/**
 * Information on overriding joint limit values per each joint.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyJointRange = {
    /**
     * Whether to override each axis.
     * @api-version 1
     * @system
     */
    override: SixNumArray,    //0 or 1
    /**
     * Minimum joint angle of each axis.
     * @api-version 1
     * @system
     */
    minRange: SixNumArray,
    /**
     * Maximum joint angle of each axis.
     * @api-version 1
     * @system
     */
    maxRange: SixNumArray
}

/**
 * Information on overriding joint speed values per each joint.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyJointSpeed = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: SixNumArray,    //0 or 1
    /**
     * Joint Speed (deg/sec)
     * @api-version 1
     * @system
     */
    speed: SixNumArray,
}

/**
 * Information on overriding TCP force limit.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyTcpForce = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: 0|1,
    /**
     * TCP force limit.
     * @api-version 1
     * @system
     */
    force: number
}

/**
 * TCP power limit.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyTcpPower = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: 0|1,
    /**
     * TCP power limit.
     * @api-version 1
     * @system
     */
    power: number
}

/**
 * Information on overriding TCP speed limit.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyTcpSpeed = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: 0|1,
    /**
     * TCP speed limit.
     * @api-version 1
     * @system
     */
    speed: number,
}

/**
 * Information on overriding TCP momentum limit.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyTcpMomentum = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: 0|1,
    /**
     * TCP momentum limit.
     * @api-version 1
     * @system
     */
    momentum: number,
}

/**
 * Information on overriding collision safety violation stop mode.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyCollision = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: 0|1,
    /**
     * Collision sensitivity.
     * @api-version 1
     * @system
     */
    sensitivity: number,
}

/**
 * Information on overriding speed rate.
 * @api-version 1
 * @system
 */
export type LocalZonePropertySpeedRate = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: 0|1,
    /**
     * Speed rate.
     * @api-version 1
     * @system
     */
    speedRate: number,
}

/**
 * Information on overriding collision safety violation stop mode.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyCollisionStopMode = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: 0|1,
    /**
     * Collision safety violation stop mode. STO: 0, SBC: 1, SS1: 2, SS2: 3, RS1:4
     * @api-version 1
     * @system
     */
    stopMode: number,

}

/**
 * Information on overriding force safety violation stop mode.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyTcpSlfStopMode = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: 0|1,
    /**
     * Force safety violation stop mode. STO: 0, SBC: 1, SS1: 2, SS2: 3, RS1:4
     * @api-version 1
     * @system
     */
    stopMode: number,
}

/**
 * Information on overriding tool orienation limit.
 * @api-version 1
 * @system
 */
export type LocalZonePropertyToolOrientation = {
    /**
     * Whether to override.
     * @api-version 1
     * @system
     */
    override: 0|1,
    /**
     * The direction by which the tool direction limit is based.
     * @api-version 1
     * @system
     */
    direction: ThreeNumArray,
    /**
     * limit angle.
     * @api-version 1
     * @system
     */
    angle: number
}

/**
 * Information on the sphere shape.
 * @api-version 1
 * @user
 */
export type SafetyZoneShapeSphere = {
    /**
     * Sphere Information
     * @api-version 1
     * @user
     */
    sphere: {
        /**
         * The center of shpere
         * @api-version 1
         * @user
         */
        center: Point3D;
        /**
         * The radius of shpere
         * @api-version 1
         * @user
         */
        radius: number;
    };
};

/**
 * Information on the cylinder shape
 * @api-version 1
 * @user
 */
export type SafetyZoneShapeCylinder = {
    /**
     * Cylinder Information.
     * The axial direction of the cylinder is the Z-axis of the reference coordinate system.
     * @api-version 1
     * @user
     */
    cylinder: {
        /**
         * The center of cylinder.
         * @api-version 1
         * @user
         */
        center: Point2D;
        /**
         * The radius of cylinder.
         * @api-version 1
         * @user
         */
        radius: number;
        /**
         * Height of the base of the cylinder.
         * @api-version 1
         * @user
         */
        lowerZ: number;
        /**
         * Height of the top of the cylinder
         * @api-version 1
         * @user
         */
        upperZ: number;
    };
};

/**
 * Information on the cuboid shape
 * Each axis of the cuboid is the same as the axis of the reference coordinate system (AABB)
 * @api-version 1
 * @user
 */
export type SafetyZoneShapeCuboid = {
    /**
     * Cuboid information.
     * @api-version 1
     * @user
     */
    cuboid: {
        /**
         * The x-value of the box lowest point.
         * @api-version 1
         * @user
         */
        lowerX: number;
        /**
         * The y-value of the box lowest point.
         * @api-version 1
         * @user
         */
        lowerY: number;
        /**
         * The z-value of the box lowest point.
         * @api-version 1
         * @user
         */
        lowerZ: number;
        /**
         * The x-value of the box highest point.
         * @api-version 1
         * @user
         */
        upperX: number;
        /**
         * The y-value of the box highest point.
         * @api-version 1
         * @user
         */
        upperY: number;
        /**
         * The z-value of the box highest point.
         * @api-version 1
         * @user
         */
        upperZ: number;
    };
};

/**
 * Information on the titled cuboid shape.(OBB)
 * @api-version 1
 * @user
 */
export type SafetyZoneShapeTiltedCuboid = {
    /**
     * The tilted cuboid information.
     * @api-version 1
     * @user
     */
    obb: {
        /**
         * A point on the edge of the box.
         * @api-version 1
         * @user
         */
        origin: Point3D;
        /**
         * The edge point in the width direction relative to the origin.
         * @api-version 1
         * @user
         */
        pointAlongUAxis: Point3D;
        /**
         * The edge point in the length direction relative to the origin.
         * @api-version 1
         * @user
         */
        pointAlongVAxis: Point3D;
        /**
         * The edge point in the height direction relative to the origin.
         * @api-version 1
         * @user
         */
        pointAlongWAxis: Point3D;
    };
};

/**
 * Information on the Spation space surrounded by multiple planes.
 * The normal direction of each plane is perpendicular to the Z axis of the reference coordinate.
 * @api-version 1
 * @user
 */
export type SafetyZoneShapeMultiPlane = {
    /**
     * Multiple plane information
     * @api-version 1
     * @user
     */
    multiPlane: {
        /**
         * Whether each plane is used (validity). Up to 6.
         * @api-version 1
         * @user
         */
        validPlane: number[];
        /**
         * Information of the planes. Up to 6
         * The plane is defined by a straight line parallel to the XY-plane of the reference coordinate system.
         * @api-version 1
         * @user
         */
        plane: Line2D[];
        /**
         * The z-value of the plane lowest point.
         * @api-version 1
         * @user
         */
        lowerZ: number;
        /**
         * The z-value of the plane heighest point.
         * @api-version 1
         * @user
         */
        upperZ: number;
        /**
         * A point in a valid space. Used to determine where a valid space is.
         * @api-version 1
         * @user
         */
        spacePoint: Point2D;
    };
};

/**
 * Information on the capsule shape.
 * @api-version 1
 * @user
 */
export type SafetyZoneShapeCapsule = {
    /**
     * Capsule information.
     * @api-version 1
     * @user
     */
    capsule: {
        /**
         * The central point 1 of the hemisphere in the capsule shape.
         * @api-version 1
         * @user
         */
        center1: Point3D;
        /**
         * The central point 2 of the hemisphere in the capsule shape.
         * @api-version 1
         * @user
         */
        center2: Point3D;
        /**
         * The radius of spheres and a cylinder.
         * @api-version 1
         * @user
         */
        radius: number;
    };
};

/**
 * Information on the shape of safety zone.
 * @api-version 1
 * @user
 */
export type SafetyZoneShape = {
    /**
     * The reference coordinate of the shape. base: 0, world: 2
     * @api-version 1
     * @user
     */
    reference: 0 | 2;
    /**
     * Shape type.
     * @api-version 1
     * @user
     */
    shapeType: SafetyZoneShapeType;
    /**
     * Information on the shape.
     * @api-version 1
     * @user
     */
    shapeData:
        | SafetyZoneShapeSphere
        | SafetyZoneShapeCylinder
        | SafetyZoneShapeCuboid
        | SafetyZoneShapeTiltedCuboid
        | SafetyZoneShapeMultiPlane
        | SafetyZoneShapeCapsule;
    /**
     * Nearmiss distance
     * @api-version 1
     * @user
     */
    margin: number;
    /**
     * Whether to use the inside or outside of the geometry. 0:inside, 1:outside
     * @api-version 1
     * @user
     */
    validSpace: 0 | 1;
};

/**
 * The line in the 2-dimensions
 * @api-version 1
 * @user
 */
export type Line2D = {
    /**
     * The first position.
     * @api-version 1
     * @user
     */
    point1: Point2D,
    /**
     * The second position.
     * @api-version 1
     * @user
     */
    point2: Point2D
}

/**
 * The point in the 3-dimensions.
 * @api-version 1
 * @user
 */
export type Point3D = {
    /**
     * X-value.
     * @api-version 1
     * @user
     */
    x: number,
    /**
     * Y-value
     * @api-version 1
     * @user
     */
    y: number,
    /**
     * Z-value
     * @api-version 1
     * @user
     */
    z: number
}

/**
 * The point in the 2-dimensions
 * @api-version 1
 * @user
 */
export type Point2D = {
    /**
     * X-value
     * @api-version 1
     * @user
     */
    x: number,
    /**
     * Y-value
     * @api-version 1
     * @user
     */
    y: number,
}

/**
 * Information on the trigger signal of the conveyor
 * It belongs to the basic environmental information for interworking the conveyor and the robot.
 * @api-version 1
 * @user
 */
export type TriggerSignal = {
    /**
     * External trigger signal number.
     * @api-version 1
     * @user
     */
    channelNo: 0|1,
    /**
     * Triggering edge type. Falling: 0, Rising: 1
     * @api-version 1
     * @user
     */
    channelType: 0|1,
    /**
     * The trigger signal latency. (second)
     * @api-version 1
     * @user
     */
    delayTime: number
}

/**
 * When the conveyor and the robot are interworked through digital output, it is used to set information about it.
 * @api-version 1
 * @user
 */
export type ConveyorRobotDigitalOut = {
    /**
     * Channel number. -1:not use. 0~15:use
     * @api-version 1
     * @user
     */
    channelNo: -1|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15,
    /**
     * Channel state.
     * @api-version 1
     * @user
     */
    channelState: 0|1
}


/**
 * The information on the flange version.
 * @api-version 1
 * @user
 */
export type FlangeVersion = {
    /**
     * Flange hardware version. (0xFF: old, Mseries: 0xBE, Aseries: 0xDE) {@link FlangeHardwareVersion}
     * @api-version 1
     * @user
     */
    flangeHardwareVersion: number
}

/**
 * Information on the ethernet ip.
 * @api-version 1
 * @user
 */
export type EthernetIpData = {
    /**
     * General purpose register type. 0 : bit, 1 : int, 2 : float
     * @api-version 1
     * @user
     */
    gprType: number,
    /**
     * General purpose register address
     * @api-version 1
     * @user
     */
    gprAddress: number,
    /**
     * Whether it is an input or an output.
     * @api-version 1
     * @user
     */
    portType: 0|1,
    /**
     * data
     * @api-version 1
     * @user
     */
    data: string
}
/**
 * Information on the Industrial Ethernet.
 * @api-version 2
 * @user
 */
export type IEData = EthernetIpData;

/**
 * This is an enumeration type constant that refers to the authority of the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const AuthorityState = {
    /**
     * Received a request to transfer a control authority.
     *
     * @api-version 1
     * @user
     */
    REQUEST: 0,
    /**
     * Denied to request to transfer a control authority.
     *
     * @api-version 1
     * @user
     */
    DENY: 1,
    /**
     * Granted a control authority.
     *
     * @api-version 1
     * @user
     */
    GRANT: 2,
    /**
     * Loss a control authority.
     *
     * @api-version 1
     * @user
     */
    LOSS: 3,
    /**
     * Transferring a control authority.
     *
     * @api-version 1
     * @user
     */
    TRANSFERRING: 4
} as const;
/**
 * @ignore
 */
export type AuthorityState = typeof AuthorityState[keyof typeof AuthorityState];

/**
 * This is an enumeration type constant that refers to the operation status of robot controller, and is defined as follows.
 *
 * **Remarks**
 * - Only in “Standby state” the client command can be operated. However the stop command, which is for stop motion, is possible at the “Moving state”.
 * - Power_on_standby state is the preparation state in order to receive the initializing packet after the bootup  process.
 * - Recovery state moves axes within the limiation point in the case each axis stops beyond its limitation. The state ignores the error and warning.
 * - Safe Stop: When there is a motion that is off the safety setting parameter such as collision, joint limit exceeded, and TCP speed exceeded etc., this stop motion occurs.
 *      - SafeStop1: Servo Off after stop (STO)
 *      - SafeStop2: Pause after stop
 *      - STO: Safe Torque Off, status of inverter power off
 * @enum
 * @api-version 1
 * @user
 */
export const RobotState = {
    /**
     * Not connected with Controller.
     *
     * @api-version 1
     * @user
     */
    DISCONNECTED: -1,
    /**
     * This is a state of automatic entrance of T/P application, and is an initialization condition for the setting of various parameters.
     * (T/P 어플리케이션에 의해서 자동으로 진입하는 상태로 각종 파라미터 설정을 위한 초기화 상태)
     *
     * @api-version 1
     * @user
     */
    INITIALIZING: 0,
    /**
     * This is an operable basis state, and is a command standby state.
     * (운용 가능한 기본 상태 지령 대기 상태)
     *
     * @api-version 1
     * @user
     */
    STANDBY: 1,
    /**
     * A command operation state that is automatically converted while the robot is moving after the receipt of commands. Once moving is done, the state is automatically converted into a command standby state.
     * (지령 대기 상태에서 지령 수신 후 동작시 자동으로 전환되는 지령 동작 상태임. 동작 완료시 자동 지령 대기 상태로 전환됨)
     * @api-version 1
     * @user
     */
    MOVING: 2,
    /**
     * This is a robot pause mode caused by functional and operational error, and is a servo off state (a state in which motor and brake power is cut off after control pause).
     * (기능 및 동작 오류로 인한 로봇 정지 모드로, 서보 오프 상태(제어 정지 후 모터 및 브레이크 전원을 차단한 상태))
     *
     * @api-version 1
     * @user
     */
    SAFE_OFF: 3,
    /**
     * Direct teaching state.
     * (직접교시 상태)
     *
     * @api-version 1
     * @user
     */
    TEACHING: 4,
    /**
     * This is a robot pause mode caused by functional and operational error, and is a safety stop state (a state in which only control pause was executed, and a temporary program pause state in the case of automatic mode).
     * (기능 및 동작 오류로 인한 로봇 정지 모드로, 안전 정지 상태(제어 정지만 수행한 상태, 자동모드인 경우 프로그램 일시 정지 상태))
     *
     * @api-version 1
     * @user
     */
    SAFE_STOP: 5,
    /**
     * Emergency stop state.
     * (비상 정지 상태)
     *
     * @api-version 1
     * @user
     */
    EMERGENCY_STOP: 6,
    /**
     * Homing Mode State (hardware-based array state of robot).
     * (홈밍 모드 상태(로봇을 하드웨어적으로 정렬하는 상태))
     *
     * @api-version 1
     * @user
     */
    HOMMING: 7,
    /**
     * Recovery mode state for moving robot into the operation range when that robot has stopped due to errors such as getting out of robot operation range.
     * (로봇 구동 범위 초과 등과 같은 오류로 인한 로봇 정지시, 구동 범위 이내로 이동시키기 위한 복구 모드 상태)
     *
     * @api-version 1
     * @user
     */
    RECOVERY: 8,
    /**
     * A state in which conversion into recovery mode is needed due to getting out of robot operation range, although it is the same as the eSTATE_SAFE_STOP state.
     * (eSTATE_SAFE_STOP 상태와 동일하나, 로봇 구동 범위 초과로 인해 복구 모드로 전환해야 하는 상태)
     *
     * @api-version 1
     * @user
     */
    SAFE_STOP2: 9,
    /**
     * A state in which conversion into recovery mode is needed due to getting out of robot operation range, although it is the same as the eSTATE_SAFE_OFF state.
     * (eSTATE_SAFE_OFF 상태와 동일하나, 로봇 구동 범위 초과로 인해 복구 모드로 전환해야 하는 상태)
     *
     * @api-version 1
     * @user
     */
    SAFE_OFF2: 10,
    /**
     * Update state.
     * (업데이트 시작상태)
     *
     * @api-version 1
     * @user
     */
    UPDATE: 11,
    /**
     * Reservation used.
     *
     * @api-version 1
     * @user
     */
    RESERVED1: 12,
    /**
     * Reservation used.
     *
     * @api-version 1
     * @user
     */
    RESERVED2: 13,
    /**
     * Reservation used.
     *
     * @api-version 1
     * @user
     */
    RESERVED3: 14,
    /**
     * State for initialization after boot-up of robot controller It is converted into the initialization state by the T/P application.
     * (로봇제어기 부트업이후 초기화를 위한 대기 상태임. T/P 어플리케이션에 의해 초기화 상태로 전환됨)
     *
     * @api-version 1
     * @user
     */
    POWER_ON_STANDBY: 15
} as const;
/**
 * @ignore
 */
export type RobotState = typeof RobotState[keyof typeof RobotState];

/**
 * This is an enumeration type constant that power off target.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const PowerManageTarget = {
    /**
     * Safety board Power off(include inverter, controller)
     *
     * @api-version 1
     * @system
     */
    SAFETYBOARD: 0,
    /**
     * Controller Power off
     *
     * @api-version 1
     * @system
     */
    DRCF: 1
} as const;
/**
 * @ignore
 */
export type PowerManageTarget = typeof PowerManageTarget[keyof typeof PowerManageTarget];

/**
 * This is an enumeration type constant that power manage type.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const PowerManageType = {
    /**
     * Power OFF
     *
     * @api-version 1
     * @system
     */
    POWER_OFF: 0,
    /**
     * Restart
     *
     * @api-version 1
     * @system
     */
    RESTART: 1,
    /**
     * Program close
     *
     * @api-version 1
     * @system
     */
    PROGRAM_CLOSE: 2
} as const;
/**
 * @ignore
 */
export type PowerManageType = typeof PowerManageType[keyof typeof PowerManageType];

/**
 * This is an enumeration type constant that refers to the operation mode of the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const RobotMode = {
    /**
     * Manual Mode.
     * Manual mode is the mode to perform single motion such as jog.
     *
     * @api-version 1
     * @user
     */
    MANUAL: 0,
    /**
     * Automatic Mode.
     * Auto mode is the mode to automatically perform motion program.
     *
     * @api-version 1
     * @user
     */
    AUTONOMOUS: 1,
    /**
     * Measurement Mode (currently not supported).
     *
     * @api-version 1
     * @user
     */
    MEASURE: 2
} as const;
/**
 * @ignore
 */
export type RobotMode = typeof RobotMode[keyof typeof RobotMode];

/**
 * Safety Stop 상태에서 Stanby 상태로 전환하기 위한 입력모드 정보
 *
 * @enum
 * @api-version 1
 * @user
 */
export const SafetyStopType = {
    /**
     * 지령 입력( 버튼? )
     *
     * @api-version 1
     * @user
     */
    BUTTON_INPUT: 0,
    /**
     * IO 입력
     *
     * @api-version 1
     * @user
     */
    IO_INPUT: 1,
    /**
     * Nudge 입력
     *
     * @api-version 1
     * @user
     */
    NUDGE_INPUT_SS2: 2,
    /**
     * Nudge 입력(DRL) 사용안함 <확인필요>
     *
     * @api-version 1
     * @user
     */
    NUDGE_INPUT_DRL: 3,
    /**
     * Nudge 불가 (단독작업 공간)
     *
     * @api-version 1
     * @user
     */
    NUDGE_INPUT_UNAVAILABLE_BY_ZONE: 4,
    /**
     * Nudge 불가 (특이점)
     *
     * @api-version 1
     * @user
     */
    NUDGE_INPUT_UNAVAILABLE_BY_SINGULAR: 5
}as const;
/**
 * @ignore
 */
export type SafetyStopType = typeof SafetyStopType[keyof typeof SafetyStopType];

/**
 * Enumverated constants than mean safety mode information of robot controller.
 * (로봇 제어기의 안전 모드 정보를 의미하는 열거형 상수)
 *
 * @enum
 * @api-version 1
 * @user
 */
export const SafetyMode = {
    /**
     * Not connected with Controller.
     *
     * @api-version 1
     * @user
     */
    DISCONNECTED: -1,
    /**
     * Manual Mode
     * (수동 모드)
     *
     * @api-version 1
     * @user
     */
    MANUAL: 0,
    /**
     * Auto Mode
     * (자동 모드)
     *
     * @api-version 1
     * @user
     */
    AUTO: 1,
    /**
     * Recovery Mode
     * (복구 모드)
     *
     * @api-version 1
     * @user
     */
    RECOVERY: 2,
    /**
     * Backdrive Mode
     * (백드라이브 모드)
     *
     * @api-version 1
     * @user
     */
    BACK_DRIVE: 3,
    /**
     * Measure Mode
     * (측정 모드)
     *
     * @api-version 1
     * @user
     */
    MEASURING: 4,
    /**
     * Initial Mode
     * (초기 모드)
     *
     * @api-version 1
     * @user
     */
    INITIAL: 5
} as const;
/**
 * @ignore
 */
export type SafetyMode = typeof SafetyMode[keyof typeof SafetyMode];

/**
 * Execution mode of safety mode setting of robot controller.
 * (로봇 제어기의 안전 모드 설정의 실행 모드)
 *
 * @enum
 * @api-version 1
 * @system
 */
export const SafetyModeEvent = {
    /**
     * Enter
     * (진입)
     *
     * @api-version 1
     * @system
     */
    ENTER: 0,
    /**
     * Execution
     * (실행)
     *
     * @api-version 1
     * @system
     */
    MOVE: 1,
    /**
     * Complete
     * (완료)
     *
     * @api-version 1
     * @system
     */
    STOP: 2
} as const;
/**
 * @ignore
 */
export type SafetyModeEvent = typeof SafetyModeEvent[keyof typeof SafetyModeEvent];

/**
 * Status of Safety Board
 *
 * @enum
 * @api-version 1
 * @system
 */
export const SafetyState = {
    /**
     * Not connected with Controller.
     *
     * @api-version 1
     * @system
     */
    DISCONNECTED: -1,
    /**
     * 시작
     *
     * @api-version 1
     * @system
     */
    BOOT_UP: 0,
    /**
     * 초기화모드
     *
     * @api-version 1
     * @system
     */
    INITIAL: 1,
    /**
     * 정지상태(브레이크, 모터전원해제)
     *
     * @api-version 1
     * @system
     */
    SAFETY_STO: 2,
    /**
     * 정지상태(브레이크, 모터전원인가)
     *
     * @api-version 1
     * @system
     */
    SAFETY_SOS: 3,
    /**
     * 수동모드
     *
     * @api-version 1
     * @system
     */
    JOG_HOMMING_SOS: 4,
    /**
     * 수동모드
     *
     * @api-version 1
     * @system
     */
    JOG_HOMMING_MOVE: 5,
    /**
     * 직접교시 모드
     *
     * @api-version 1
     * @system
     */
    HAND_GUIDE_MOVE: 6,
    /**
     * 복구모드
     *
     * @api-version 1
     * @system
     */
    RECOVERY_SOS: 7,
    /**
     * 복구모드
     *
     * @api-version 1
     * @system
     */
    RECOVERY_MOVE: 8,
    /**
     * 백드라이브 모드
     *
     * @api-version 1
     * @system
     */
    RECOVERY_BACK_DRIVE: 9,
    /**
     * 복구모드 직접교시 모드
     *
     * @api-version 1
     * @system
     */
    RECOVERY_HAND_GUIDE_MOVE: 10,
    /**
     * 자동모드(DRL실행모드)
     *
     * @api-version 1
     * @system
     */
    STANDARD_WORKSPACE_SOS: 11,
    /**
     * 자동모드(DRL실행모드)
     *
     * @api-version 1
     * @system
     */
    STANDARD_WORKSPACE_MOVE: 12,
    /**
     * 자동모드(DRL실행모드)
     *
     * @api-version 1
     * @system
     */
    COLLABORATIVE_WORKSPACE_SOS: 13,
    /**
     * 자동모드(DRL실행모드)
     *
     * @api-version 1
     * @system
     */
    COLLABORATIVE_WORKSPACE_MOVE: 14,
    /**
     * 충돌 감시 무효 지역
     *
     * @api-version 1
     * @system
     */
    COLLISION_OFF_RUN: 15,
    /**
     * 측정모드
     *
     * @api-version 1
     * @system
     */
    AUTO_MEASURE_RUN: 16,
    /**
     * 자동모드(DRL 실행모드, 대기 상태)
     *
     * @api-version 1
     * @system
     */
    AUTO_JOG_HOMMING_SOS: 17,
    /**
     * 자동모드(DRL 실행모드, 교시 상태)
     *
     * @api-version 1
     * @system
     */
    AUTO_JOG_HOMMING_MOVE: 18
} as const;
/**
 * @ignore
 */
export type SafetyState = typeof SafetyState[keyof typeof SafetyState];

/**
 * This is an enumeration type constant that refers to the operation system of the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const RobotSystem = {
    /**
     * Not connected with Controller.
     *
     * @api-version 1
     * @user
     */
    DISCONNECTED: -1,
    /**
     * Actual Robot System
     *
     * @api-version 1
     * @user
     */
    REAL: 0,
    /**
     * Virtual Robot System
     *
     * @api-version 1
     * @user
     */
    VIRTUAL: 1,
} as const;
/**
 * @ignore
 */
export type RobotSystem = typeof RobotSystem[keyof typeof RobotSystem];

/**
 * Ethernet ip general purpose register data type.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const EthernetIpGprDataType = {
    /**
     * Bit
     * @api-version 1
     * @user
     */
    BIT: 0,
    /**
     * Integer
     * @api-version 1
     * @user
     */
    INT: 1,
    /**
     * Float
     * @api-version 1
     * @user
     */
    FLOAT: 2
} as const;
/**
 * Industrial Ethernet general purpose register data type.
 *
 * @enum
 * @api-version 2
 * @user
 */
export const IEGprDataType = EthernetIpGprDataType;
/**
 * @ignore
 */
export type EthernetIpGprDataType = typeof EthernetIpGprDataType[keyof typeof EthernetIpGprDataType];
/**
 * @ignore
 */
export type IEGprDataType = typeof IEGprDataType[keyof typeof IEGprDataType];

/**
 * This is an enumeration type constant that refers to the GPIO digital input/output terminal installed in the edge of the robot, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const GpioFlangeDigitalIndex = {
    /**
     * Robot Edge GPIO No. 1 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_1: 0,
    /**
     * Robot Edge GPIO No. 2 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_2: 1,
    /**
     * Robot Edge GPIO No. 3 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_3: 2,
    /**
     * Robot Edge GPIO No. 4 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_4: 3,
    /**
     * Robot Edge GPIO No. 5 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_5: 4,
    /**
     * Robot Edge GPIO No. 6 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_6: 5
} as const;
/**
 * @ignore
 */
export type GpioFlangeDigitalIndex = typeof GpioFlangeDigitalIndex[keyof typeof GpioFlangeDigitalIndex];

/**
 * 로봇 제어기의 컨트롤 박스에 장착된 GPIO 아날로그 입출력 단자를 의미하는 열거형 상수
 *
 * @enum
 * @api-version 1
 * @user
 */
export const GpioControlBoxAnalogIndex = {
    /**
     * Control box analog GPIO input/output port No.1
     *
     * @api-version 1
     * @user
     */
    INDEX_1: 0,
    /**
     * Control box analog GPIO input/output port No.2
     *
     * @api-version 1
     * @user
     */
    INDEX_2: 1
} as const;
/**
 * @ignore
 */
export type GpioControlBoxAnalogIndex = typeof GpioControlBoxAnalogIndex[keyof typeof GpioControlBoxAnalogIndex];

/**
 * An enumerated constant indicating the input/output type of the GPIO digital input/output port installed in the control box of the robot controller.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const GpioDigitalType = {
    /**
     * PNP
     *
     * @api-version 1
     * @user
     */
    PNP: 0,
    /**
     * NPN
     *
     * @api-version 1
     * @user
     */
    NPN: 1,
} as const;
/**
 * @ignore
 */
export type GpioDigitalType = typeof GpioDigitalType[keyof typeof GpioDigitalType];

/**
 * An enumerated constant indicating the input/output type of the GPIO analog input/output port installed in the control box of the robot controller.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const GpioAnalogType = {
    /**
     * 전류 입출력
     *
     * @api-version 1
     * @user
     */
    CURRENT: 0,
    /**
     * 전압 입출력
     *
     * @api-version 1
     * @user
     */
    VOLTAGE: 1,
} as const;
/**
 * @ignore
 */
export type GpioAnalogType = typeof GpioAnalogType[keyof typeof GpioAnalogType];

/**
 * The enumerated constants representing the version of the flange.
 *
 * @enum
 * @api-version 2
 * @user
 */
export const FlangeHardwareVersion = {
    /**
     * OLD version flange(Robot model distinction required)
     * A/E Series: Digital Input 2, Digital Output 2, RS-485 1, Supply Voltage 24V
     * M/H Series: Digital Input 6, Digital Output 6, Supply Voltage 24V
     *
     * @api-version 2
     * @user
     */
    OLD: 0xFF,
    /**
     * NEW version flange for M/H
     * Digital Input 4, Digital Output 4, Analog Input 4/RS-485 2, Supply Voltage 0V, 12V, 24V
     *
     * @api-version 2
     * @user
     */
    MH: 0xBE,
    /**
     * NEW version flange for A/E
     * Digital Input 2, Digital Output 2, Analog Input 2/RS-485 1, Supply Voltage 0V, 12V, 24V
     *
     * @api-version 2
     * @user
     */
    AE: 0xDE,
} as const;
/**
 * @ignore
 */
export type FlangeHardwareVersion = typeof FlangeHardwareVersion[keyof typeof FlangeHardwareVersion];

/**
 * An enumerated constant indicating the input type of the GPIO analog input port installed in the flange.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const FlangeAnalogPinMode = {
    /**
     * RS485
     *
     * @api-version 1
     * @user
     */
    RS485: 0,
    /**
     * Anlog
     *
     * @api-version 1
     * @user
     */
    ANALOG: 1,
} as const;
/**
 * @ignore
 */
export type FlangeAnalogPinMode = typeof FlangeAnalogPinMode[keyof typeof FlangeAnalogPinMode];


/**
 * An enumerated constant representing the interrupt type of the digital port on the robot flange.
 *
 * @enum
 * @api-version 2
 * @user
 */
export const FlangeInterlockServoOff = {
    /**
     * Maintaining power voltage & digital output.
     *
     * @api-version 2
     * @user
     */
    MAINTAIN: 0,
    /**
     * Switch the power voltage & digital output to 0V and revert to the last state when ‘Servo On’.
     *
     * @api-version 2
     * @user
     */
    SWITCH: 1,
} as const;
/**
 * @ignore
 */
export type FlangeInterlockServoOff = typeof FlangeInterlockServoOff[keyof typeof FlangeInterlockServoOff];

/**
 * An enumerated constant representing the interrupt type of the digital port on the robot flange.
 *
 * @enum
 * @api-version 2
 * @user
 */
export const FlangeInterlockInterrupted = {
    /**
     * Maintaining power voltage & digital output.
     *
     * @api-version 2
     * @user
     */
    MAINTAIN: 0,
    /**
     * Switch the power voltage & digital output to 0V and revert to the last state when reset.
     *
     * @api-version 2
     * @user
     */
    SWITCH: 1,
} as const;
/**
 * @ignore
 */
export type FlangeInterlockInterrupted = typeof FlangeInterlockInterrupted[keyof typeof FlangeInterlockInterrupted];

/**
 * Enumerated constant representing flange-mounted GPIO analog input/output terminals
 *
 * @enum
 * @api-version 1
 * @user
 */
export const GpioFlangeAnalogIndex = {
    /**
     * Flange analog GPIO input/output port No.1
     *
     * @api-version 1
     * @user
     */
    INDEX_1: 0, // GPIO 1번 입출력 포트
    /**
     * Flange analog GPIO input/output port No.2
     *
     * @api-version 1
     * @user
     */
    INDEX_2: 1, // GPIO 2번 입출력 포트
    /**
     * Flange analog GPIO input/output port No.3
     *
     * @api-version 1
     * @user
     */
    INDEX_3: 2, // GPIO 3번 입출력 포트
    /**
     * Flange analog GPIO input/output port No.4
     *
     * @api-version 1
     * @user
     */
    INDEX_4: 3, // GPIO 4번 입출력 포트
} as const;
/**
 * @ignore
 */
export type GpioFlangeAnalogIndex = typeof GpioFlangeAnalogIndex[keyof typeof GpioFlangeAnalogIndex];

/**
 * The type of Digital IO port
 *
 * @enum
 * @api-version 1
 * @user
 */
export const GpioTypeIndex = {
    /**
     * Connect DigitalIO to Control Box port
     *
     * @api-version 1
     * @user
     */
    CONTROLLER: 0,
    /**
     * Connect DigitalIO to Flange port
     *
     * @api-version 1
     * @user
     */
    FLANGE: 1
} as const;
/**
 * @ignore
 */
export type GpioTypeIndex = typeof GpioTypeIndex[keyof typeof GpioTypeIndex];

/**
 * This is an enumeration type constant that refers to the GPIO digital input/output terminal installed in the control box of the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const GpioControlBoxDigitalIndex = {
    /**
     * Control Box GPIO No. 1 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_1: 0,
    /**
     * Control Box GPIO No. 2 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_2: 1,
    /**
     * Control Box GPIO No. 3 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_3: 2,
    /**
     * Control Box GPIO No. 4 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_4: 3,
    /**
     * Control Box GPIO No. 5 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_5: 4,
    /**
     * Control Box GPIO No. 6 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_6: 5,
    /**
     * Control Box GPIO No. 7 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_7: 6,
    /**
     * Control Box GPIO No. 8 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_8: 7,
    /**
     * Control Box GPIO No. 9 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_9: 8,
    /**
     * Control Box GPIO No. 10 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_10: 9,
    /**
     * Control Box GPIO No. 11 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_11: 10,
    /**
     * Control Box GPIO No. 12 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_12: 11,
    /**
     * Control Box GPIO No. 13 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_13: 12,
    /**
     * Control Box GPIO No. 14 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_14: 13,
    /**
     * Control Box GPIO No. 15 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_15: 14,
    /**
     * Control Box GPIO No. 16 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_16: 15,
    /**
     * Control Box GPIO No. 17 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_17: 16,
    /**
     * Control Box GPIO No. 18 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_18: 17,
    /**
     * Control Box GPIO No. 19 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_19: 18,
    /**
     * Control Box GPIO No. 20 Input/Output Port.
     *
     * @api-version 1
     * @user
     */
    INDEX_20: 19,
} as const;
/**
 * @ignore
 */
export type GpioControlBoxDigitalIndex = typeof GpioControlBoxDigitalIndex[keyof typeof GpioControlBoxDigitalIndex];

/**
 * The enumaration of the flange serial port id.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const GpioFlangePortIndex = {
    /**
     * X1 Serial port.
     *
     * @api-version 1
     * @user
     */
    X1: 1,
    /**
     * X2 Serial port.
     *
     * @api-version 1
     * @user
     */
    X2: 2
} as const;
/**
 * @ignore
 */
export type GpioFlangePortIndex = typeof GpioFlangePortIndex[keyof typeof GpioFlangePortIndex];

/**
 * GPIO digital output signal voltage.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const GpioDigitalVoltage = {
    /**
     * 0 voltage
     *
     * @api-version 1
     * @user
     */
    VOLTAGE_0: 0,
    /**
     * 12 voltage
     *
     * @api-version 1
     * @user
     */
    VOLTAGE_12: 12,
    /**
     * 24 voltage
     *
     * @api-version 1
     * @user
     */
    VOLTAGE_24: 24,
} as const;
/**
 * @ignore
 */
export type GpioDigitalVoltage = typeof GpioDigitalVoltage[keyof typeof GpioDigitalVoltage];

/**
 * Doosan robot series
 *
 * @enum
 * @api-version 1
 * @user
 */
export const RobotSeries = {
    /**
     * Unkonwn Series
     *
     * @api-version 1
     * @user
     */
    UNKNOWN: 0,
    /**
     * M series
     *
     * @api-version 1
     * @user
     */
    M_SERIES: 1,
    /**
     * H series
     *
     * @api-version 1
     * @user
     */
    H_SERIES: 2,
    /**
     * A series
     *
     * @api-version 1
     * @user
     */
    A_SERIES: 3,
    /**
     * AS series
     *
     * @api-version 1
     * @user
     */
    AS_SERIES: 4,
    /**
     * E series
     *
     * @api-version 1
     * @user
     */
    E_SERIES: 5,
} as const;
/**
 * @ignore
 */
export type RobotSeries = typeof RobotSeries[keyof typeof RobotSeries];

/**
 * This is an enumeration type constant that refers to the motion pause type that can stop the motion control when motion is controlled in the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const StopType = {
    /**
     * Internal reservation used.
     *
     * @api-version 1
     * @user
     */
    QUICK_STO: 0,
    /**
     * Quick Stop (maintenance of motion trajectory).
     *
     * @api-version 1
     * @user
     */
    QUICK: 1,
    /**
     * Slow Stop (maintenance of motion trajectory).
     *
     * @api-version 1
     * @user
     */
    SLOW: 2,
    /**
     * Emergency Stop.
     *
     * @api-version 1
     * @user
     */
    HOLD: 3,
    /**
     * Emergency Stop.
     *
     * @api-version 1
     * @user
     */
    EMERGENCY: 3
} as const;
/**
 * @ignore
 */
export type StopType = typeof StopType[keyof typeof StopType];

/**
 * This is an enumeration type constant that refers to the coordinate space controlling robot in the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const RobotSpace = {
    /**
     * Joint Space.
     *
     * @api-version 1
     * @user
     */
    JOINT: 0,
    /**
     * Task Space.
     *
     * @api-version 1
     * @user
     */
    TASK:1
} as const;
/**
 * @ignore
 */
export type RobotSpace = typeof RobotSpace[keyof typeof RobotSpace];

/**
 * Pattern Type.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const PatternType = {
    /**
     * Snake pattern Type.
     *
     * @api-version 1
     * @user
     */
    SNAKE: 0,
    /**
     * Zigzag pattern Type.
     *
     * @api-version 1
     * @user
     */
    ZIGZAG: 1,
    /**
     * Rhombus Snake pattern Type.
     *
     * @api-version 3
     * @user
     */
    RHOMBUS_SNAKE: 2,
    /**
     * Rhombus Zigzag pattern Type.
     *
     * @api-version 3
     * @user
     */
    RHOMBUS_ZIGZAG: 3
} as const;
/**
 * @ignore
 */
export type PatternType = typeof PatternType[keyof typeof PatternType];

/**
 * This is an enumeration type constant that refers to the termination reason when the program is terminated in the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ProgramStopCause = {
    /**
     * Normal Program Termination
     *
     * @api-version 1
     * @user
     */
    NORMAL: 0,
    /**
     * Forced Program Termination
     *
     * @api-version 1
     * @user
     */
    FORCE: 1,
    /**
     * Program Termination Caused by Inside/Outside Errors
     *
     * @api-version 1
     * @user
     */
    ERROR: 2,
} as const;
/**
 * @ignore
 */
export type ProgramStopCause = typeof ProgramStopCause[keyof typeof ProgramStopCause];

/**
 * This is an enumeration type constant that refers to the execution state of program in the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ProgramState = {
    /**
     * Program Waiting State
     *
     * @api-version 1
     * @user
     */
    NONE: 0,
    /**
     * Program Playing State
     *
     * @api-version 1
     * @user
     */
    PLAY: 1,
    /**
     * Program Stopped State
     *
     * @api-version 1
     * @user
     */
    STOP: 2,
    /**
     * Program Paused State
     *
     * @api-version 1
     * @user
     */
    HOLD: 3,
    /**
     * Program Cancelled State
     *
     * @api-version 1
     * @user
     */
    CANCELLED: 4,
} as const;
/**
 * @ignore
 */
export type ProgramState = typeof ProgramState[keyof typeof ProgramState];

/**
 * This is an enumeration type constant that refers to the save mode of drl program in the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ProgramSaveMode = {
    /**
     * Delete program
     *
     * @api-version 1
     * @user
     */
    DELETE: 0,
    /**
     * Save program
     *
     * @api-version 1
     * @user
     */
    SAVE: 1,
} as const;
/**
 * @ignore
 */
export type ProgramSaveMode = typeof ProgramSaveMode[keyof typeof ProgramSaveMode];

/**
 * This is an enumeration type constant that refers to the motion pause type that can stop the motion control when motion is controlled in the robot controller, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ProgramStopType = {
    /**
     * Slow Stop (maintenance of motion trajectory)
     *
     * @api-version 1
     * @user
     */
    SLOW: 0,
    /**
     * Quick Stop (maintenance of motion trajectory)
     *
     * @api-version 1
     * @user
     */
    QUICK: 1,
} as const;
/**
 * @ignore
 */
export type ProgramStopType = typeof ProgramStopType[keyof typeof ProgramStopType];

/**
 * This is a type that refers to the program execution line information.
 *
 * @api-version 1
 * @user
 */
export type ProgramExecuteLine = {
    /**
     * Line number
     *
     * @api-version 1
     * @user
     */
    lineNumber: number,
    /**
     * Elapse time (second)
     * This value is the time information for the execution of the line starting from the start of the program.
     *
     * @api-version 1
     * @user
     */
    elapseTime: number,
    /**
     * DRL file name
     * If main program is running, then this value is set as '<string>', otherwise (sub program) DRL file name.
     *
     * @api-version 1
     * @user
     */
    fileName: string
}

/**
 * Enumeration constants that mean each axis of the robot based on the workspace coordinate system in the robot controller.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const TaskAxis = {
    /**
     * X-direction of the coordinate
     *
     * @api-version 1
     * @user
     */
    X: 0,
    /**
     * Y-direction of the coordinate
     *
     * @api-version 1
     * @user
     */
    Y: 1,
    /**
     * Z-direction of the coordinate
     *
     * @api-version 1
     * @user
     */
    Z: 2,
} as const;
/**
 * @ignore
 */
export type TaskAxis = typeof TaskAxis[keyof typeof TaskAxis];

/**
 * Enumeration constants that mean each axis of the robot based on the joint space coordinate system in the robot controller.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const JointAxis = {
    /**
     * 1-st joint
     * @api-version 1
     * @user
     */
    AXIS_1: 0,
    /**
     * 2-nd joint
     * @api-version 1
     * @user
     */
    AXIS_2: 1,
    /**
     * 3-th joint
     * @api-version 1
     * @user
     */
    AXIS_3: 2,
    /**
     * 4-th joint
     * @api-version 1
     * @user
     */
    AXIS_4: 3,
    /**
     * 5-th joint
     *
     * @api-version 1
     * @user
     */
    AXIS_5: 4,
    /**
     * 6-th joint
     *
     * @api-version 1
     * @user
     */
    AXIS_6: 5
} as const;
/**
 * @ignore
 */
export type JointAxis = typeof JointAxis[keyof typeof JointAxis];


/**
 * Enumeration constants that mean jog axis.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const JogAxis = {
    /**
     * J1 Axis
     *
     * @api-version 1
     * @user
    */
    J1: 1,
    /**
     * J2 Axis
     *
     * @api-version 1
     * @user
    */
    J2: 2,
    /**
     * J3 Axis
     *
     * @api-version 1
     * @user
    */
    J3: 3,
    /**
     * J4 Axis
     *
     * @api-version 1
     * @user
    */
    J4: 4,
    /**
     * J5 Axis
     *
     * @api-version 1
     * @user
    */
    J5: 5,
    /**
     * J6 Axis
     *
     * @api-version 1
     * @user
    */
    J6: 6,
    /**
     * X-axis translation of TCP.
     *
     * @api-version 1
     * @user
    */
    TX: 1,
    /**
     * Y-axis translation of TCP.
     *
     * @api-version 1
     * @user
    */
    TY: 2,
    /**
     * Z-axis translation of TCP.
     *
     * @api-version 1
     * @user
    */
    TZ: 3,
    /**
     * X-axis rotation of TCP.
     *
     * @api-version 1
     * @user
    */
    RX: 4,
    /**
     * Y-axis rotation of TCP.
     *
     * @api-version 1
     * @user
    */
    RY: 5,
    /**
     * Z-axis rotation of TCP.
     *
     * @api-version 1
     * @user
    */
    RZ: 6,
} as const;
/**
 * @ignore
 */
export type JogAxis = typeof JogAxis[keyof typeof JogAxis];


/**
 * Internal and external enumerated constants when querying controller IP.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const SystemIpUsage = {
    /**
     * IP address for internal use in the controller
     *
     * @api-version 1
     * @system
     */
    INTERNAL: 0,
    /**
     * IP address for external use in the controller
     *
     * @api-version 1
     * @system
     */
    EXTERNAL: 1,
} as const;
/**
 * @ignore
 */
export type SystemIpUsage = typeof SystemIpUsage[keyof typeof SystemIpUsage];

/**
 * dhcp, static enumeration constant when looking up the controller IP.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const SystemIpType = {
    /**
     * Use the controller's ip as dhcp
     *
     * @api-version 1
     * @system
     */
    DHCP: 0,
    /**
     * Using the controller's IP as static
     *
     * @api-version 1
     * @system
     */
    STATIC: 1,
} as const;
/**
 * @ignore
 */
export type SystemIpType = typeof SystemIpType[keyof typeof SystemIpType];

/**
 * reference coordinate enumerated value
 *
 * @enum
 * @api-version 1
 * @user
 */
export const CoordinateSystem = {
    /**
     * Robot base
     *
     * @api-version 1
     * @user
     */
    BASE: 0,
    /**
     * Tool
     *
     * @api-version 1
     * @user
     */
    TOOL: 1,
    /**
     * World
     *
     * @api-version 1
     * @user
     */
    WORLD: 2,
    /**
     * 1-st user coordinate.
     * @api-version 1
     * @user
     */
    USER: 101,
    /**
     * The minimum id of user coordinate. (Range: 101 ~ 200)
     * @api-version 1
     * @user
     */
    USER_MIN: 101,
    /**
     * The maximum id of user coordinate. (Range: 101 ~ 200)
     * @api-version 1
     * @user
     */
    USER_MAX: 200,
} as const;
/**
 * @ignore
 */
export type CoordinateSystem = typeof CoordinateSystem[keyof typeof CoordinateSystem];

/**
 * Information on modbus.
 * It is used to set values for Modbus communication.
 *
 * @api-version 1
 * @user
 */
export type ModbusInfo = {
    /**
     * A unique symbol of Modbus communication for which you want to set a value.
     *
     * @api-version 1
     * @user
     */
    symbol: string,
    /**
     * Value
     *
     * @api-version 1
     * @user
     */
    registerValue: number,
}

/**
 * The list of modbus data.
 *
 * @api-version 1
 * @user
 */
export type ModbusDataList = {
    /**
     * The number of data in the list.
     *
     * @api-version 1
     * @user
     */
    count: number,
    /**
     * data list.
     *
     * @api-version 1
     * @user
     */
    registerList: ModbusData[]
}

/**
 * Serial port list and connected device information.
 *
 * @api-version 1
 * @user
 */
export type SerialPortData = {
    /**
     * Port name
     *
     * @api-version 1
     * @user
     */
    serialPort: string,
    /**
     * Device name
     *
     * @api-version 1
     * @user
     */
    name: string
}

/**
 * Information on the serial port of the controller.
 *
 * @api-version 1
 * @user
 */
export type SerialPortList = {
    /**
     * The number of data in the list.
     *
     * @api-version 1
     * @user
     */
    count: number,
    /**
     * Serial port data. up to 100.
     *
     * @api-version 1
     * @user
     */
    serialList: SerialPortData[]
}

/**
 * Information on the modbus data.
 *
 * @api-version 1
 * @user
 */
export type ModbusData = {
    /**
     * Modbus datat type. 0:TCP, 1:RTU
     *
     * @api-version 1
     * @user
     */
    type: 0|1,
    /**
     * The unique symbol of the modbus
     *
     * @api-version 1
     * @user
     */
    symbol: string,
    /**
     * IP address. Used for TCP
     *
     * @api-version 1
     * @user
     */
    ipAddress: string,
    /**
     * Serial port name. Used for RTU
     *
     * @api-version 1
     * @user
     */
    serialPort: string,
    /**
     * TCP port. Used for TCP
     *
     * @api-version 1
     * @user
     */
    portIndex: number,
    /**
     * Slave id. used for RTU
     *
     * @api-version 1
     * @user
     */
    slaveId: number,
    /**
     * Baud rate. used for RTU.
     *
     * @api-version 1
     * @user
     */
    baudrate: 1200|2400|4800|9600|19200|38400|57600|115200,
    /**
     * Byte size. used for RTU
     *
     * @api-version 1
     * @user
     */
    byteSize: number,
    /**
     * Parity bit. One of N, O, E. used for RTU
     *
     * @api-version 1
     * @user
     */
    parityBit: "N"|"O"|"E",
    /**
     * Stop bit. used for RTU
     *
     * @api-version 1
     * @user
     */
    stopBit: number,
    /**
     * I/O Type
     *
     * @api-version 1
     * @user
     */
    registerType: number,
    /**
     * Register address.
     *
     * @api-version 1
     * @user
     */
    registerIndex: number,
    /**
     * Register value for writable modbus type.
     *
     * @api-version 1
     * @user
     */
    registerValue: number
}

/**
 * Robot joint brake control for non-motorized control
 *
 * @api-version 1
 * @system
 */
export type ControlBrake = {
    /**
     * Target joint to control brake (0~5: specific joint, 6: All joint)
     *
     * @api-version 1
     * @system
     */
    targetAxis: JointAxis|6,
    /**
     * Brake active state control 0:off 1:on
     *
     * @api-version 1
     * @system
     */
    value: 0|1,
}

/**
 * System ip address.
 *
 * @api-version 1
 * @user
 */
export type SystemIpAddress = {
    /**
     * Current IP address usage status Internal:0, External:1
     *
     * @api-version 1
     * @user
     */
    usage: SystemIpUsage,
    /**
     * Current IP address setting status dhcp:0, static:1
     *
     * @api-version 1
     * @user
     */
    ipType: SystemIpType,
    /**
     * Host ip address
     *
     * @api-version 1
     * @user
     */
    hostIp: string,
    /**
     * Subnet mask address
     *
     * @api-version 1
     * @user
     */
    subnetMask: string,
    /**
     * Default gateway address
     *
     * @api-version 1
     * @user
     */
    gateway: string,
    /**
     * Primary dns address
     *
     * @api-version 1
     * @user
     */
    primaryDNS: string,
    /**
     * Secondary dns address
     *
     * @api-version 1
     * @user
     */
    secondaryDNS: string,
}

/**
 * data type of targetExternalForceMonitoring monitorable variable
 *
 * @enum
 * @api-version 1
 * @user
 */
export type ExternalForceMonitoringData = {
    /**
     * target 0:Base coordinate, 1:Tool coordinate, 2:World coordinate, 3:Active user coordinate, 101~200:User coordinate
     *
     * @api-version 1
     * @user
     */
    target: number,
    /**
     * X element of external force
     *
     * @api-version 1
     * @user
     */
    x: number,
    /**
     * Y element of external force
     *
     * @api-version 1
     * @user
     */
    y: number,
    /**
     * Z element of external force
     *
     * @api-version 1
     * @user
     */
    z: number,
    /**
     * RX element of external force
     *
     * @api-version 1
     * @user
     */
    rx: number,
    /**
     * RY element of external force
     *
     * @api-version 1
     * @user
     */
    ry: number,
    /**
     * RZ element of external force
     *
     * @api-version 1
     * @user
     */
    rz: number,
}

/**
 * 로봇 제어기에서 등록할 수 있는 모드버스 레지스터 타입에 관한 열거형 상수
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ModbusRegisterType = {
    /**
     * Dircrete Input
     *
     * @api-version 1
     * @user
     */
    DISCRETE_INPUTS: 0,
    /**
     * Coils
     *
     * @api-version 1
     * @user
     */
    COILS: 1,
    /**
     * Input Register
     *
     * @api-version 1
     * @user
     */
    INPUT_REGISTER: 2,
    /**
     * Holding Register
     *
     * @api-version 1
     * @user
     */
    HOLDING_REGISTER: 3
} as const;
/**
 * @ignore
 */
export type ModbusRegisterType = typeof ModbusRegisterType[keyof typeof ModbusRegisterType];


/**
 * Enumeration constant for Modbus register type that can be registered in robot controller including multi function
 *
 * @enum
 * @api-version 2
 * @user
 */
 export const ExtendModbusRegisterType = {
    /**
     * Dircrete Input
     *
     * @api-version 2
     * @user
     */
    DISCRETE_INPUTS: 0,
    /**
     * Coils
     *
     * @api-version 2
     * @user
     */
    COILS: 1,
    /**
     * Input Register
     *
     * @api-version 2
     * @user
     */
    INPUT_REGISTER: 2,
    /**
     * Holding Register
     *
     * @api-version 2
     * @user
     */
    HOLDING_REGISTER: 3,
    /**
     * Multiple Coils
     *
     * @api-version 2
     * @user
     */
    MULTIPLE_COILS_FC15: 4,
    /**
     * Multiple Holding Register
     *
     * @api-version 2
     * @user
     */
    MULTIPLE_HOLDING_REGISTERS_FC16: 5,
} as const;
/**
 * @ignore
 */
export type ExtendModbusRegisterType = typeof ExtendModbusRegisterType[keyof typeof ExtendModbusRegisterType];

/**
 * Robot Install Posture Information
 *
 * @api-version 1
 * @user
 */
export type ConfigInstallPose = {
    /**
     * Robot slope on ground [°]
     *
     * @api-version 1
     * @user
     */
    gradient: Number,
    /**
     * Robot rotation angle [°]
     *
     * @api-version 1
     * @user
     */
    rotation: Number
}

/**
 * Calibration information for JTS sensors.
 *
 * @api-version 1
 * @system
 */
export type JtsParameterData = {
    /**
     * Offset of the six axis
     *
     * @api-version 1
     * @system
     */
    offset: SixNumArray,
    /**
     * Scale of the six axis
     *
     * @api-version 1
     * @system
     */
    scale: SixNumArray
}

/**
 * Information on the conveyor coordinate and pulse calculation.
 *
 * @api-version 1
 * @user
 */
export type ConveyorCoordinateCalculationResult = {
    /**
     * Conveyor Coordinate
     *
     * @api-version 1
     * @user
     */
    coordinate: SixNumArray,
    /**
     * Count per distance (mm/pulse or deg/pulse)
     *
     * @api-version 1
     * @user
     */
    distance2Count: number,
}

/**
 * Information on the conveyor distance
 *
 * @api-version 1
 * @user
 */
export type ConveyorDistanceCalculationResult = {
    /**
     * Conveyor speed (mm/s or deg/s)
     *
     * @api-version 1
     * @user
     */
    speed: number,
    /**
     * Minimum distance (mm or degree)
     *
     * @api-version 1
     * @user
     */
    minDistance: number,
    /**
     * Watch window distance (mm or degree)
     *
     * @api-version 1
     * @user
     */
    watchWindowDistance: number,
    /**
     * Maximum distance (mm or degree)
     *
     * @api-version 1
     * @user
     */
    maxDistance: number,
    /**
     * Sync out distance (mm or degree)
     *
     * @api-version 1
     * @user
     */
    syncOutDistance: number,
}

/**
 * Information on the calculated tcp
 *
 * @api-version 1
 * @user
 */
export type TcpCoordinateCalculationResult = {
    /**
     * Error (mm)
     *
     * @api-version 1
     * @user
     */
    error: number,
    /**
     * Flange to TCP.
     *₩
     * @api-version 1
     * @user
     */
    tcp: SixNumArray
}

/**
 * Information on the calculated tool data.
 *
 * @api-version 1
 * @user
 */
export type MeasureToolResponse = {
    /**
     * Weight
     *
     * @api-version 1
     * @user
     */
    weight: number,
    /**
     * Center of gravity.
     *
     * @api-version 1
     * @user
     */
    cog: ThreeNumArray
}


/**
 * Information of 3PE Switch Setting.
 *
 * @api-version 2
 * @user
 */
export type Pos3EnableSwitch = {
    /**
     * Whether to use 3 Position Eanble switch.
     *
     * @api-version 2
     * @user
     */
    enable: boolean,

    /**
     * 3PE Switch state. deactivate(0), activate(1)
     *
     * @api-version 2
     * @user
     */
    state: number
}

/**
 * Digital signal active level
 *
 * @enum
 * @api-version 1
 * @user
 */
export const DigitalSignalActiveLevel = {
    /**
     * Low edge. (~ 2.8)
     *
     * @api-version 1
     * @user
     */
    LOW_EDGED_LEGACY: 0,
    /**
     * High edge. (~ 2.8)
     *
     * @api-version 1
     * @user
     */
    HIGH_EDGED_LEGACY: 1,
    /**
     * Low edge (2.8 ~)
     *
     * @api-version 1
     * @user
     */
    LOW_EDGED: 2,
    /**
     * High edge (2.8 ~)
     *
     * @api-version 1
     * @user
     */
    HIGH_EDGED: 3,
    /**
     * Low level.
     *
     * @api-version 1
     * @user
     */
    LOW_LEVELED: 4,
    /**
     * High level.
     *
     * @api-version 1
     * @user
     */
    HIGH_LEVELED: 5,
} as const;
/**
 * @ignore
 */
export type DigitalSignalActiveLevel = typeof DigitalSignalActiveLevel[keyof typeof DigitalSignalActiveLevel];

/**
 * Information on the IO mapping function in the remote mode
 *
 * @api-version 1
 * @user
 */
export type ConfigIoFunction = {
    /**
     * Port index.
     *
     * @api-version 1
     * @user
     */
    portIndex: -1|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19,
    /**
     * Digital signal active level
     *
     * @api-version 1
     * @user
     */
    level: DigitalSignalActiveLevel
}

/**
 * Enumeration constant for the size of data to be transmitted during serial communication
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ByteSize = {
    /**
     * 5 bits
     *
     * @api-version 1
     * @user
     */
    FIVEBITES: 5,
    /**
     * 6 bits
     *
     * @api-version 1
     * @user
     */
    SIXBITS: 6,
    /**
     * 7 bits
     *
     * @api-version 1
     * @user
     */
    SEVENBITS: 7,
    /**
     * 8 bits `default`
     *
     * @api-version 1
     * @user
     */
    EIGHTBITS: 8,
} as const;
/**
 * @ignore
 */
export type ByteSize = typeof ByteSize[keyof typeof ByteSize];

/**
 * Enumeration constant for the size of data to be transmitted during flange serial communication
 *
 * @enum
 * @api-version 2
 * @user
 */
export const FlangeByteSize = {
    /**
     * 5 bits
     *
     * @api-version 2
     * @user
     */
    FIVEBITS: 5,
    /**
     * 6 bits
     *
     * @api-version 2
     * @user
     */
    SIXBITS: 6,
    /**
     * 7 bits
     *
     * @api-version 2
     * @user
     */
    SEVENBITS: 7,
    /**
     * 8 bits `default`
     *
     * @api-version 2
     * @user
     */
    EIGHTBITS: 8,
    /**
     * 9 bits
     *
     * @api-version 2
     * @user
     */
    NINEBITS: 9,
} as const;
/**
 * @ignore
 */
export type FlangeByteSize = typeof FlangeByteSize[keyof typeof FlangeByteSize];

/**
 * GPIO digital port setting information.
 *
 * @api-version 1
 * @user
 */
export type GpioPort ={
    /**
     * I/O Port index
     * Control box digital input(20 ports), digital output (16 ports), Robot Arm Digital Output (6 ports) 0~5
     *
     * @api-version 1
     * @user
     */
     index: number,
     /**
      * Output setting - If it is a digital port, only 0 and 1 are possible
      *
      * @api-version 1
      * @user
      */
     value: number
}

/**
 * Enumeration constant for parityBit check in serial communication
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ParityCheck = {
    /**
     * None `default`
     *
     * @api-version 1
     * @user
     */
    NONE: 0,
    /**
     * Even
     *
     * @api-version 1
     * @user
     */
    EVEN: 1,
    /**
     * Odd
     *
     * @api-version 1
     * @user
     */
    ODD: 2,
} as const;
/**
 * @ignore
 */
export type ParityCheck = typeof ParityCheck[keyof typeof ParityCheck];

/**
 * Enumeration constant for stopBit indicating the end of frame during serial communication
 *
 * @enum
 * @api-version 1
 * @user
 */
export const StopBit = {
    /**
     * 1 bit `default`
     *
     * @api-version 1
     * @user
     */
    ONE: 1,
    /**
     * Two bit
     *
     * @api-version 1
     * @user
     */
    TWO: 2,
} as const;
/**
 * @ignore
 */
export type StopBit = typeof StopBit[keyof typeof StopBit];

/**
 * Shape data for safety zone.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const SafetyZoneShapeType = {
    /**
     * Shpere
     *
     * @api-version 1
     * @user
     */
    SPHERE: 0,
    /**
     * Cylinder
     *
     * @api-version 1
     * @user
     */
    CYLINDER: 1,
    /**
     * Cuboid
     *
     * @api-version 1
     * @user
     */
    CUBOID: 2,
    /**
     * Tilted Cuboid
     *
     * @api-version 1
     * @user
     */
    TILTED_CUBOID:3,
    /**
     * Multiple plane
     *
     * @api-version 1
     * @user
     */
    MULTI_PLNAE:4,
    /**
     * Capsule
     *
     * @api-version 1
     * @user
     */
    CAPSULE:5

} as const;
/**
 * @ignore
 */
export type SafetyZoneShapeType = typeof SafetyZoneShapeType[keyof typeof SafetyZoneShapeType];

/**
 * Shape data for tool.
 *
 * @enum
 * @api-version 3
 * @user
 */
export const ToolShapeType = {
    /**
     * Sphere
     *
     * @api-version 3
     * @user
     */
    SPHERE: 0,
    /**
     * Capsule
     *
     * @api-version 3
     * @user
     */
    CAPSULE: 1,
    /**
     * Cuboid
     *
     * @api-version 3
     * @user
     */
    CUBOID: 2
} as const;
/**
 * @ignore
 */
export type ToolShapeType = typeof ToolShapeType[keyof typeof ToolShapeType];

/**
 * Protective stop 시 이후 작업을 설정하기 위한 열거형 상수
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ReleaseMode = {
    /**
     * 프로그램 정지
     *
     * @api-version 1
     * @user
     */
    STOP: 0,
    /**
     * 프로그램 재개
     *
     * @api-version 1
     * @user
     */
    RESUME: 1,
    /**
     * 안전 정지 해제
     *
     * @api-version 1
     * @user
     */
    RELEASE: 2,
    /**
     * Interlock Reset
     *
     * @api-version 1
     * @user
     */
    RESET: 3
} as const;
/**
 * @ignore
 */
export type ReleaseMode = typeof ReleaseMode[keyof typeof ReleaseMode];

/**
 * TCP Communication Type
 *
 * @api-version 1
 * @user
 */
export const TcpCommunicationType = {
    /**
     * Server
     *
     * @api-version 1
     * @user
     */
    SERVER: 1,
    /**
     * Client
     *
     * @api-version 1
     * @user
     */
    CLIENT: 2
} as const;
/**
 * @ignore
 */
export type TcpCommunicationMode = typeof TcpCommunicationType[keyof typeof TcpCommunicationType];

/**
 * TCP Communication Server Information
 *
 * @api-version 1
 * @user
 */
export type TcpCommunicationServerInfo = {
    /**
     * Communication Mode
     *
     * @api-version 1
     * @user
     */
    mode: TcpCommunicationMode,
    /**
     * Port id
     *
     * @api-version 1
     * @user
     */
    portIndex: number
    /**
     * Time out
     *
     * @api-version 1
     * @user
     */
    timeout: number
    /**
     * Connected client count.
     *
     * @api-version 1
     * @user
     */
    clientConnectedNumber: number
    /**
     * Process id.
     *
     * @api-version 1
     * @user
     */
    pidProcessId: number
    /**
     * Client ID
     *
     * @api-version 1
     * @user
     */
    clientId: number[]
    /**
     * IP Address
     *
     * @api-version 1
     * @user
     */
    ipAddress: string
    /**
     * Unique ID
     *
     * @api-version 1
     * @user
     */
    uniqueId: number
}

/**
 * TCP Communication Client Information
 *
 * @api-version 1
 * @user
 */
export type TcpCommunicationClientInfo = {
    /**
     * Client ID
     *
     * @api-version 1
     * @user
     */
    clientId: number,
    /**
     * Port id
     *
     * @api-version 1
     * @user
     */
    portIndex: number
    /**
     * IP Address
     *
     * @api-version 1
     * @user
     */
    ipAddress: string
}

/**
 * Serial Communication Information
 *
 * @api-version 1
 * @user
 */
export type SerialCommunicationConfig = {
    /**
     * Serial port
     *
     * @api-version 1
     * @user
     */
    serialPort: string,
    /**
     * Baudrate.
     *
     * @api-version 1
     * @user
     */
    baudrate: number,
    /**
     * Parity check.
     *
     * @api-version 1
     * @user
     */
    parityBit: ParityCheck,
    /**
     * Byte size.
     *
     * @api-version 1
     * @user
     */
    byteSize: ByteSize,
    /**
     * Stop bits
     *
     * @api-version 1
     * @user
     */
    stopBit: StopBit,
    /**
     * Timeout
     *
     * @api-version 1
     * @user
     */
    timeout: number,
}


/**
 * Flange Serial Communication Information
 *
 * @api-version 2
 * @user
 */
export type FlangeSerialCommunicationConfig = {
    /**
     * Baudrate.
     *
     * @api-version 2
     * @user
     */
    baudrate: number,
    /**
     * Parity check. {@link ParityCheck}
     *
     * @api-version 2
     * @user
     */
    parityBit: ParityCheck,
    /**
     * Byte Size. {@link FlangeByteSize}
     *
     * @api-version 2
     * @user
     */
    byteSize: FlangeByteSize,
    /**
     * Stop bits {@link StopBit}
     *
     * @api-version 2
     * @user
     */
    stopBit: StopBit
}

/**
 * Types of user input.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const UserInputType = {
    /**
     * integer type.
     *
     * @api-version 1
     * @user
     */
    INT: 0,
    /**
     * float type.
     *
     * @api-version 1
     * @user
     */
    FLOAT: 1,
    /**
     * string type.
     *
     * @api-version 1
     * @user
     */
    STRING: 2,
    /**
     * boolean type
     *
     * @api-version 1
     * @user
     */
    BOOL: 3
} as const;
/**
 * @ignore
 */
export type UserInputType = typeof UserInputType[keyof typeof UserInputType];

/**
 * Level of user popup.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const UserPopupLevel = {
    /**
     * Message level.
     *
     * @api-version 1
     * @user
     */
    MESSAGE: 0,
    /**
     * Warning level.
     *
     * @api-version 1
     * @user
     */
    WARNING: 1,
    /**
     * Alarm level.
     *
     * @api-version 1
     * @user
     */
    ALARM: 2
} as const;
/**
 * @ignore
 */
export type UserPopupLevel = typeof UserPopupLevel[keyof typeof UserPopupLevel];

/**
 * Button type of user popup.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const UserPopupButtonType = {
    /**
     * Resume and Stop button.
     *
     * @api-version 1
     * @user
     */
    RESUME_AND_STOP: 0,
    /**
     * OK button.
     *
     * @api-version 1
     * @user
     */
    OK: 1
} as const;
/**
 * @ignore
 */
export type UserPopupButtonType = typeof UserPopupButtonType[keyof typeof UserPopupButtonType];

/**
 * Level of alarm log.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const AlarmLogLevel = {
    /**
     * Message level.
     *
     * @api-version 1
     * @user
     */
    MESSAGE: 1,
    /**
     * Warning level.
     *
     * @api-version 1
     * @user
     */
    WARNING: 2,
    /**
     * Alarm level.
     *
     * @api-version 1
     * @user
     */
    ALARM: 3
} as const;
/**
 * @ignore
 */
export type AlarmLogLevel = typeof AlarmLogLevel[keyof typeof AlarmLogLevel];

/**
 * Category of alarm log.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const AlarmLogCategory = {
    /**
     * Control framework
     *
     * @enum
     * @api-version 1
     * @user
     */
    CONTROL_FRAMEWORK: 1,
    /**
     * Control algorithm
     *
     * @api-version 1
     * @user
     */
    CONTROL_ALGORITHM: 2,
    /**
     * Inverter.
     *
     * @api-version 1
     * @user
     */
    INVERTER: 4,
    /**
     * Safety
     *
     * @api-version 1
     * @user
     */
    SAFETY_CONTROLLER: 5
} as const;
/**
 * @ignore
 */
export type AlarmLogCategory = typeof AlarmLogCategory[keyof typeof AlarmLogCategory];

/**
 * 로봇 제어기의 속도 모드 상수
 *
 * @enum
 * @api-version 1
 * @user
 */
export const SpeedMode = {
    /**
     * Normal speed mode.
     *
     * @api-version 1
     * @user
     */
    NORMAL_MODE: 0,
    /**
     * Reduced speed mode.
     *
     * @api-version 1
     * @user
     */
    REDUCED_MODE: 1
} as const;
/**
 * @ignore
 */
export type SpeedMode = typeof SpeedMode[keyof typeof SpeedMode];

/**
 * Types of solution space.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const SolutionSpace = {
    /**
     * Shoulder: Lefty, Elbow: Below, Wrist: No Flip
     *
     * @api-version 1
     * @user
     */
    TYPE_0: 0,
    /**
     * Shoulder: Lefty, Elbow: Below, Wrist: Flip
     *
     * @api-version 1
     * @user
     */
    TYPE_1: 1,
    /**
     * Shoulder: Lefty, Elbow: Above, Wrist: No Flip
     *
     * @api-version 1
     * @user
     */
    TYPE_2: 2,
    /**
     * Shoulder: Lefty, Elbow: Above, Wrist: Flip
     *
     * @api-version 1
     * @user
     */
    TYPE_3: 3,
    /**
     * Shoulder: Righty, Elbow: Below, Wrist: No Flip
     *
     * @api-version 1
     * @user
     */
    TYPE_4: 4,
    /**
     * Shoulder: Righty, Elbow: Below, Wrist: Flip
     *
     * @api-version 1
     * @user
     */
    TYPE_5: 5,
    /**
     * Shoulder: Righty, Elbow: Above, Wrist: No Flip
     *
     * @api-version 1
     * @user
     */
    TYPE_6: 6,
    /**
     * Shoulder: Righty, Elbow: Above, Wrist: Flip
     *
     * @api-version 1
     * @user
     */
    TYPE_7: 7,
    /**
     * Auto.
     *
     * @api-version 2
     * @user
     */
    TYPE_AUTO: 255
} as const;
/**
 * @ignore
 */
export type SolutionSpace = typeof SolutionSpace[keyof typeof SolutionSpace];



/**
 * Types of Cockpit.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const CockpitType = {
    /**
     * 5 buttons cockpit.
     *
     * @api-version 1
     * @user
     */
    FIVE_BUTTONS: 0,
    /**
     * 6 buttons cockpit.
     *
     * @api-version 1
     * @user
     */
    SIX_BUTTONS: 1
} as const;
/**
 * @ignore
 */
export type CockpitType = typeof CockpitType[keyof typeof CockpitType];

/**
 * 용접 조건 조정 구간 정보
 *
 * @enum
 * @api-version 1
 * @user
 */
// export const WeldingAdjustAvailableStatus = {
//     /**
//      * 조정 불가 구간
//      *
//      * @api-version 1
//      * @user
//      */
//     ADJUST_UNAVAILABLE: 0,
//     /**
//      * 조정 가능 구간
//      *
//      * @api-version 1
//      * @user
//      */
//     ADJUST_AVAILABLE: 1
// } as const;
// /**
//  * @ignore
//  */
// export type WeldingAdjustAvailableStatus = typeof WeldingAdjustAvailableStatus[keyof typeof WeldingAdjustAvailableStatus];

// /**
//  * 용접 상태 정보
//  *
//  * @enum
//  * @api-version 1
//  * @user
//  */
// export const WeldingStatus = {
//     /**
//      * 비용접
//      *
//      * @api-version 1
//      * @user
//      */
//     NOT_WELDING: 0,
//     /**
//      * 용접 (정상)
//      *
//      * @api-version 1
//      * @user
//      */
//     WELDING: 1,
//     /**
//      * 용접 (이상)
//      *
//      * @api-version 1
//      * @user
//      */
//     ERROR: 9,
//     /**
//      * 모의 용접 (dry-run)
//      *
//      * @api-version 1
//      * @user
//      */
//     DRY_RUN: 99
// } as const;
// /**
//  * @ignore
//  */
// export type WeldingStatus = typeof WeldingStatus[keyof typeof WeldingStatus];
//
// /**
//  * Welding Machine communication state.
//  *
//  * @enum
//  * @api-version 1
//  * @user
//  */
// export const WeldingCommunicationState = {
//     /**
//      * Offline.
//      *
//      * @api-version 1
//      * @user
//      */
//     OFFLINE: 0,
//     /**
//      * Online.
//      *
//      * @api-version 1
//      * @user
//      */
//     ONLINE: 1
// } as const;
// /**
//  * @ignore
//  */
// export type WeldingCommunicationState = typeof WeldingCommunicationState[keyof typeof WeldingCommunicationState];
//
// /**
//  * Ethernet / IP Slave communication state.
//  *
//  * @enum
//  * @api-version 1
//  * @user
//  */
// export const WeldingSlaveCommunicationState = {
//     /**
//      * EIP Slave Offline.
//      *
//      * @api-version 1
//      * @user
//      */
//     EIP_SLAVE_OFFLINE: 0,
//     /**
//      * Master Online.
//      *
//      * @api-version 1
//      * @user
//      */
//     MASTER_ONLINE: 1,
//     /**
//      * Robot data Online.
//      *
//      * @api-version 1
//      * @user
//      */
//     ROBOT_DATA_ONLINE: 2,
//     /**
//      * Interface Incomplete.
//      *
//      * @api-version 1
//      * @user
//      */
//     INTERFACE_INCOMPLETE: 3,
//     /**
//      * Welding Machine Online.
//      *
//      * @api-version 1
//      * @user
//      */
//     WELDING_MACHINE_ONLINE: 4
// } as const;
// /**
//  * @ignore
//  */
// export type WeldingSlaveCommunicationState = typeof WeldingSlaveCommunicationState[keyof typeof WeldingSlaveCommunicationState];

/**
 * Modbus slave coil information
 *
 * @api-version 1
 * @user
 */
export type EthernetIpMonitoringModbusCoil = {
    /**
     * Controlbox digital input 1~20 (coil 0 ~ 19) read only
     *
     * @api-version 2
     * @user
     */
    ctrlDigitalInput: TwentyNumArray,
    /**
     * Controlbox digital output 1~16 (coil 16 ~ 31) read/write
     *
     * @api-version 2
     * @user
     */
    ctrlDigitalOutput: SixteenNumArray,
    /**
     * Tool digital input 1~6 (coil 32 ~ 37) read only
     *
     * @api-version 2
     * @user
     */
    toolDigitalInput: SixNumArray,
    /**
     * Tool digital output 1~6 (coil 38 ~ 43) read/write
     *
     * @api-version 2
     * @user
     */
    toolDigitalOutput: SixNumArray,
    /**
     * Servo on robot (col 260) read only
     *
     * @api-version 1
     * @user
     */
    servoOnRobot: number,
    /**
     * Emergency Stopped (col 261) read only
     *
     * @api-version 1
     * @user
     */
    emergencyStopped: number,
    /**
     * Safety Stopped (col 262) read only
     *
     * @api-version 1
     * @user
     */
    safetyStopped: number,
    /**
     * Direct teach button pressed (col 263) read only
     *
     * @api-version 1
     * @user
     */
    directTeachButtonPress: number,
    /**
     * Power button pressed (col 264) read only
     *
     * @api-version 1
     * @user
     */
    powerButtonPress: number,
    /**
     * Safety stopped requireing recovery mode (col 265) read only
     *
     * @api-version 1
     * @user
     */
    safetyStoppedRequiredRecoveryMode: number,
}

/**
 * Modbus slave coil information
 *
 * @api-version 2
 * @user
 */
export type IEMonitoringModbusCoil = EthernetIpMonitoringModbusCoil

/**
 * Modbus slave register information
 *
 * @api-version 1
 * @user
 */
export type EthernetIpMonitoringModbusRegister = {
    /**
     * Controlbox digital input 1~20 (H Reg 0) read only
     *
     * @api-version 2
     * @user
     */
    ctrlDigitalInput: TwentyNumArray,
    /**
     * Controlbox digital output 1~16 (H Reg 1) read/write
     *
     * @api-version 2
     * @user
     */
    ctrlDigitalOutput: SixteenNumArray,
    /**
     * Controlbox analog input 1 (H Reg 4) read only
     *
     * @api-version 1
     * @user
     */
    ctrlAnalogInput1: number,
    /**
     * Controlbox analog input 1 type (H Reg 5) read/write
     *
     * @api-version 1
     * @user
     */
    ctrlAnalogInput1Type: number,
    /**
     * Controlbox analog input 2 (H Reg 6) read only
     *
     * @api-version 1
     * @user
     */
    ctrlAnalogInput2: number,
    /**
     * Controlbox analog input 2 type (H Reg 7) read/write
     *
     * @api-version 1
     * @user
     */
    ctrlAnalogInput2Type: number,
    /**
     * Controlbox analog output 1 (H Reg 16) read only
     *
     * @api-version 1
     * @user
     */
    ctrlAnalogOutput1: number,
    /**
     * Controlbox analog output 1 type (H Reg 17) read/write
     *
     * @api-version 1
     * @user
     */
    ctrlAnalogOutput1Type: number,
    /**
     * Controlbox analog output 2 (H Reg 18) read only
     *
     * @api-version 1
     * @user
     */
    ctrlAnalogOutput2: number,
    /**
     * Controlbox analog output 2 type (H Reg 19) read/write
     *
     * @api-version 1
     * @user
     */
    ctrlAnalogOutput2Type: number,
    /**
     * Tool digital input 1~6 (H Reg 21) read only
     *
     * @api-version 2
     * @user
     */
    toolDigitalInput: SixNumArray,
    /**
     * Tool digital output 1~6 (H Reg 22) write only
     *
     * @api-version 2
     * @user
     */
    toolDigitalOutput: SixNumArray,
    /**
     * Tool analog intput 1 (H Reg 23) read only
     *
     * @api-version 2
     * @user
     */
    toolAnalogInput1: number,
    /**
     * The type of tool analog intput 1 (H Reg 24) read only
     *
     * @api-version 2
     * @user
     */
    toolAnalogInputType1: number,
    /**
     * Tool analog intput 2 (H Reg 25) read only
     *
     * @api-version 2
     * @user
     */
    toolAnalogInput2: number,
    /**
     * The type of tool analog intput 2 (H Reg 26) read only
     *
     * @api-version 2
     * @user
     */
    toolAnalogInputType2: number,
    /**
     * The type of tool analog intput 3 (H Reg 27) read only
     *
     * @api-version 2
     * @user
     */
    toolAnalogInput3: number,
    /**
     * The type of tool analog intput 3 (H Reg 28) read only
     *
     * @api-version 2
     * @user
     */
    toolAnalogInputType3: number,
    /**
     * The type of tool analog intput 4 (H Reg 29) read only
     *
     * @api-version 2
     * @user
     */
    toolAnalogInput4: number,
    /**
     * The type of tool analog intput 4 (H Reg 30) read only
     *
     * @api-version 2
     * @user
     */
    toolAnalogInputType4: number,
    /**
     * Tool voltage output level (H Reg 31) read only
     *
     * @api-version 2
     * @user
     */
    toolVoltageOutputLevel: number,
    /**
     * General pupose 16bit register (size 128) (H Reg 128~255) read/write
     *
     * @api-version 1
     * @user
     */
    gpr: number[],
    /**
     * Controller major version (H Reg 256) read only
     *
     * @api-version 1
     * @user
     */
    ctrlMajorVer: number,
    /**
     * Controller minor version (H Reg 257) read only
     *
     * @api-version 1
     * @user
     */
    ctrlMinorVer: number,
    /**
     * Controller patch version (H Reg 258) read only
     *
     * @api-version 1
     * @user
     */
    ctrlPatchVer: number,
    /**
     * Robot state (H Reg 259) read only
     *
     * @api-version 1
     * @user
     */
    robotState: number,
    /**
     * Servo on robot (H Reg 260) read only
     *
     * @api-version 1
     * @user
     */
    servoOnRobot: number,
    /**
     * Emergency Stopped (H Reg 261) read only
     *
     * @api-version 1
     * @user
     */
    emergencyStopped: number,
    /**
     * Safty Stopped (H Reg 262) read only
     *
     * @api-version 1
     * @user
     */
    safetyStopped: number,
    /**
     * Direct teach button pressed (H Reg 263) read only
     *
     * @api-version 1
     * @user
     */
    directTeachButtonPressed: number,
    /**
     * Servo on robot (H Reg 264) read only
     *
     * @api-version 1
     * @user
     */
    powerButtonPressed: number,
    /**
     * Joint position (H Reg 270~275) read only
     *
     * @api-version 1
     * @user
     */
    jointPosition: SixNumArray,
    /**
     * Joint velocity (H Reg 280~285) read only
     *
     * @api-version 1
     * @user
     */
    jointVelocity: SixNumArray,
    /**
     * Joint Motor Current (H Reg 290~295) read only
     *
     * @api-version 1
     * @user
     */
    jointMotorCurrent: SixNumArray,
    /**
     * Joint Motor Temperature (H Reg 300~305) read only
     *
     * @api-version 1
     * @user
     */
    jointMotorTemp: SixNumArray,
    /**
     * Joint Torque (H Reg 310~315) read only
     *
     * @api-version 1
     * @user
     */
    jointTorque: SixNumArray,
    /**
     * Task Position (H Reg 400~405) read only
     *
     * @api-version 1
     * @user
     */
    taskPosition: SixNumArray,
    /**
     * Task Velocity (H Reg 410~415) read only
     *
     * @api-version 1
     * @user
     */
    taskVelocity: SixNumArray,
    /**
     * Tool offset length (H Reg 420~425) read only
     *
     * @api-version 1
     * @user
     */
    toolOffsetLength: SixNumArray,
    /**
     * Task external force (H Reg 430~435) read only
     *
     * @api-version 1
     * @user
     */
    taskExternalForce: SixNumArray,
}
/**
 * Modbus slave register information
 *
 * @api-version 2
 * @user
 */
export type IEMonitoringModbusRegister = EthernetIpMonitoringModbusRegister

/**
 * General purpose register data
 *
 * @api-version 1
 * @user
 */
export type EthernetIpMonitoringGpr = {
    /**
     * General purpose register data
     * @returns {number[]} An array with 464 elements
     * 0-7 : bit input register(0-63), Each element is represented in decimal format, so to find the bit position, it must be converted to binary format.
     * 8-103 : integer input register(0-23)
     * 104-199 : float input register(0-23)
     * 200-231 : bit input register(0-255), Each element is represented in decimal format, so to find the bit position, it must be converted to binary format.
     * 232-239 : bit output register(0-63), Each element is represented in decimal format, so to find the bit position, it must be converted to binary format.
     * 240-335 : integer output register(0-23)
     * 336-431 : float output register(0-23)
     * 432-463 : bit output register(0-255), Each element is represented in decimal format, so to find the bit position, it must be converted to binary format.
     *
     * @api-version 1
     * @user
     */
    gpr: number[]
};

/**
 * General purpose register data
 *
 * @api-version 2
 * @user
 */
export type IEMonitoringGpr = EthernetIpMonitoringGpr;

/**
 * Monitoring data for Modbus, Industrial Ethernet Slave
 *
 * @api-version 1
 * @user
 * @deprecated Use {@link IEMonitoring} instead.
 */
export type EthernetIpMonitoring = {
    /**
     * Modbus coil data
     *
     * @api-version 1
     * @user
     */
    mbusCoil: EthernetIpMonitoringModbusCoil,
    /**
     * Modbus register data
     *
     * @api-version 1
     * @user
     */
    mbusHoldingRegister: EthernetIpMonitoringModbusRegister,
    /**
     * General purpose register data
     *
     * @api-version 1
     * @user
     */
    industrialEthernetGPR: EthernetIpMonitoringGpr
}

/**
 * IndustrialEthernet monitoring data
 *
 * @api-version 2
 * @user
 */
export type IEMonitoring = {
    /**
     * Modbus coil
     *
     * @api-version 2
     * @user
     */
    mbusCoil: IEMonitoringModbusCoil,
    /**
     * Modbus register
     *
     * @api-version 2
     * @user
     */
    mbusHoldingRegister: IEMonitoringModbusRegister,
    /**
     * General purpose register data
     *
     * @api-version 2
     * @user
     */
    industrialEthernetGPR: IEMonitoringGpr
}

/**
 * Robot Task space pose.
 *
 * @api-version 1
 * @user
 */
export type TaskPose = {
    /**
     * Robot Task space pose. (X, Y, Z, RZ, RY, RX)
     *
     * @api-version 1
     * @user
     */
    targetPose: SixNumArray,

    /**
     * Solution space index.
     *
     * @api-version 1
     * @user
     */
    targetSolutionSpace: SolutionSpace
}

/**
 * Robot pose expression type.
 *
 * @api-version 2
 * @user
 */
 export const OrientationType = {
    /**
     * (x,y,z,rz1,ry,rz2)
     * RotZ*RotY*RotZ
     *
     * @api-version 2
     * @user
     */
    EULER_ZYZ: 0,
    /**
     * (x,y,z,rz,ry,rx)
     * RotZ*RotY*RotX
     *
     * @api-version 2
     * @user
     */
    EULER_ZYX: 1,
    /**
     * (x,y,z,rx,ry,rz)
     * RotX*RotY*RotZ
     *
     * @api-version 2
     * @user
     */
    EULER_XYZ: 2,
    /**
     * (x,y,z,rx,ry,rz)
     * RotZ*RotY*RotX
     *
     * @api-version 2
     * @user
     */
    FIXED_XYZ: 3,
    /**
     * (x,y,z,vx,vy,vz,theta)
     *
     * @api-version 2
     * @user
     */
    ROTVEC: 4,
    /**
     * (x,y,z,q0,q1,q2,q3)
     *
     * @api-version 2
     * @user
     */
    QUATERNION: 5,
    /**
     * using default orientation type. (EULER_ZYX)
     *
     * @api-version 2
     * @user
     */
    NONE: 255,
}as const;
/**
 * @ignore
 */
export type OrientationType = typeof OrientationType[keyof typeof OrientationType];

/**
 * Manipulator pose
 *
 * @api-version 2
 * @user
 */
 export type ManipulatorPose = {
    /**
     * pose variables
     *
     * @api-version 2
     * @user
     */
    pose: number[],

    /**
     * solution space that determines robot pose
     *
     * @api-version 2
     * @user
     */
    solutionSpace: SolutionSpace | 255;


    /**
     * turn no that determines robot pose
     * if set 255. robot will move to the nearest target position.
     *
     * @api-version 2
     * @user
     */
    turnNo: number | 255;

    /**
     * Orientation Type
     *
     * @api-version 2
     * @user
     */
    orientationType:OrientationType;
}


/**
 * Safety Zone Type
 *
 * @api-version 1
 * @user
 */
export const SafetyZoneType = {
    /**
     * Space Limit Zone
     *
     * @api-version 1
     * @user
     */
    SPACE_LIMIT_ZONE: 0,
    /**
     * Custom Zone
     * Custom zone includes all properties of Collaborative Zone, Crushing Prevention Zone, Collision Sensitivity Reduction Zone, and Tool Orientation Limit Zone.
     *
     * @api-version 1
     * @user
     */
    CUSTOM_ZONE: 1,
    /**
     * Collaborative Zone
     *
     * @api-version 1
     * @user
     */
    COLLABORATIVE_ZONE: 2,
    /**
     * Crushing Prevention Zone
     *
     * @api-version 1
     * @user
     */
    CRUSHING_PREVENTION_ZONE: 3,
    /**
     * Collision Sensitivity Reduction Zone
     *
     * @api-version 1
     * @user
     */
    COLLISION_SENSITIVITY_REDUCTION_ZONE: 4,
    /**
     * Tool Orientation Limit Zone
     *
     * @api-version 1
     * @user
     */
    TOOL_ORIENTATION_LIMIT_ZONE: 5
} as const;
/**
 * @ignore
 */
export type SafetyZoneType = typeof SafetyZoneType[keyof typeof SafetyZoneType];

/**
 * The received data of tcp server.
 *
 * @api-version 1
 * @user
 */
export type TcpCommunicationMonitoringData = {
    /**
     * The uniqueId of server socket.
     *
     * @api-version 1
     * @user
     */
    uniqueId: number,

    /**
     * ID of the client that sent the data
     *
     * @api-version 1
     * @user
     */
    clientId: number,



    /**
     * Total data length
     *
     * @api-version 1
     * @user
     */
    totalLength: number,

    /**
     * Current sequence no of data stream
     *
     * @api-version 1
     * @user
     */
    currentSequenceNo: number,


    /**
     * Last sequence no of data stream
     *
     * @api-version 1
     * @user
     */
    endSequenceNo: number,

    /**
     * The recieved data.
     *
     * @api-version 1
     * @user
     */
    data: Uint8Array
}

/**
 * authentication for paid app
 * @api-version 1
 * @system
 */
export type StoreAuthenticationData = {
    buyerAccount: string | null,
    moduleName: string,
    packageName: string
};

/**
 * Installed framework module package info.
 *
 * @api-version 1
 * @user
 */
export type FrameworkModulePackageInfo = {
    /**
     * Package name
     *
     * @api-version 1
     * @user
     */
    packageName: string,

    /**
     * package version
     *
     * @api-version 1
     * @user
     */
    version: string,

    /**
     * List of modules in the package
     *
     * @api-version 1
     * @user
     */
    moduleList: string[]
}

/**
 * Framework module status
 *
 * @api-version 1
 * @user
 */
export const FrameworkModuleStatus = {
    /**
     * Not support framework module feature.
     *
     * @api-version 1
     * @user
     */
    NOT_SUPPORT: -1,
    /**
     * Success
     *
     * @api-version 1
     * @user
     */
    SUCCESS: 0,
    /**
     * Failed caused by unknown error
     *
     * @api-version 1
     * @user
     */
    FAIL: 1,
    /**
     * Invalid unique id
     *
     * @api-version 1
     * @user
     */
    INVALID_UNIQUE_ID: 2,
    /**
     * Invalid execute file
     *
     * @api-version 1
     * @user
     */
    INVALID_EXECUTE_FILE: 3,
    /**
     * Time error
     *
     * @api-version 1
     * @user
     */
    GET_TIME_ERROR: 4,
    /**
     * Failed to open semaphore
     *
     * @api-version 1
     * @user
     */
    OPEN_SEMAPHORE_FAIL: 5,
    /**
     * Failed to install caused by package exist
     *
     * @api-version 1
     * @user
     */
    INSTALL_PACKAGE_EXIST: 20,
    /**
     * Failed to install caused by download fail
     *
     * @api-version 1
     * @user
     */
    INSTALL_DOWNLOAD_FAIL: 21,
    /**
     * Failed to install caused by package not found
     *
     * @api-version 1
     * @user
     */
    INSTALL_PACKAGE_NOT_FOUND: 22,
    /**
     * Failed to install caused by wrong extension file
     *
     * @api-version 1
     * @user
     */
    INSTALL_WRONG_EXTENSION_FILE: 23,
    /**
     * Failed to install caused by invalid manifest file
     *
     * @api-version 1
     * @user
     */
    INSTALL_INVALID_MANIFEST_FILE: 24,
    /**
     * Failed to install caused by invalid package path
     *
     * @api-version 1
     * @user
     */
    INSTALL_PACKAGE_PATH_INVALID: 25,
    /**
     * Failed to load caused by not installed
     *
     * @api-version 1
     * @user
     */
    LOAD_MODULE_NOT_INSTALL: 40,
    /**
     * Failed to load
     *
     * @api-version 1
     * @user
     */
    LOAD_MODULE_FAIL: 41,
    /**
     * Failed to load caused by init fail
     *
     * @api-version 1
     * @user
     */
    LOAD_MODULE_INIT_FAIL: 42,
    /**
     * Failed to load caused by not found
     *
     * @api-version 1
     * @user
     */
    LOAD_MODULE_NOT_FOUND: 43,
    /**
     * Failed to load caused already loaded
     *
     * @api-version 1
     * @user
     */
    LOAD_MODULE_ALREADY_LOADED: 44,
    /**
     * Failed to load caused not installed
     *
     * @api-version 1
     * @user
     */
    LOAD_PACKAGE_NOT_INSTALL: 45,
    /**
     * Failed to unload caused not installed
     *
     * @api-version 1
     * @user
     */
    UNLOAD_MODULE_NOT_INSTALL: 60,
    /**
     * Failed to unload caused not not running
     *
     * @api-version 1
     * @user
     */
    UNLOAD_MODULE_NOT_RUNNING: 61,
    /**
     * Failed to unload caused force kill
     *
     * @api-version 1
     * @user
     */
    UNLOAD_MODULE_FORCE_KILL: 62,
    /**
     * Failed to delete caused invalid package name
     *
     * @api-version 1
     * @user
     */
    DELETE_INVALID_PACKAGE_NAME: 80,
    /**
     * Failed to delete caused not installed
     *
     * @api-version 1
     * @user
     */
    DELETE_PACKAGE_NOT_INSTALL: 81,
    /**
     * Failed to delete caused running
     *
     * @api-version 1
     * @user
     */
    DELETE_PACKAGE_RUNNING: 82,
    /**
     * Failed to reload
     *
     * @api-version 1
     * @user
     */
    RELOAD_MODULE_FAIL: 100,
    /**
     * Failed to insert SQL
     *
     * @api-version 1
     * @user
     */
    SQL_INSERT_FAIL: 120,
    /**
     * Failed to delete SQL
     *
     * @api-version 1
     * @user
     */
    SQL_DELETE_FAIL: 121,
    /**
     * Failed to query SQL
     *
     * @api-version 1
     * @user
     */
    SQL_QUERY_FAIL: 122,
    /**
     * Installed folder empty
     *
     * @api-version 1
     * @user
     */
    INSTALLED_FOLDER_EMPTY: 140,
    /**
     * Restore target package is not installed
     *
     * @api-version 1
     * @user
     */
    RESTORE_PKG_INSTALLED_NOT_FOUND: 160,
    /**
     * Backup file for restore not found
     *
     * @api-version 1
     * @user
     */
    RESTORE_BAK_FILE_NOT_FOUND: 161
} as const;
/**
 * @ignore
 */
export type FrameworkModuleStatus = typeof FrameworkModuleStatus[keyof typeof FrameworkModuleStatus];

/**
 * TCP Comm Result
 *
 * @api-version 1
 * @user
 */
export type TcpCommunicationResult = {
    /**
     * return value
     *
     * @api-version 1
     * @user
     */
    result: number,

    /**
     * unique id
     *
     * @api-version 1
     * @user
     */
    uniqueId: number
}

/**
 * Serial Comm Result
 *
 * @api-version 1
 * @user
 */
export type SerialCommunicationResult = {
    /**
     * return value
     *
     * @api-version 1
     * @user
     */
    result: number,

    /**
     * unique id
     *
     * @api-version 1
     * @user
     */
    uniqueId: number
}

/**
 * System Version Information
 *
 * @api-version 1
 * @user
 */
export type SystemVersionInfo = {
    /**
     * Package Version Information
     *
     * @api-version 1
     * @user
     */
    package: string,
    /**
     * Smart TP Version Information
     *
     * @api-version 1
     * @user
     */
    smartTp: string,
    /**
     * Controller Version Information
     *
     * @api-version 1
     * @user
     */
    controller: string,
    /**
     * Interpreter Version Information
     *
     * @api-version 1
     * @user
     */
    interpreter: string,
    /**
     * Inverter Version Information
     *
     * @api-version 1
     * @user
     */
    inverter: [string, string, string, string, string, string],
    /**
     * SafetyBoard Version Information
     *
     * @api-version 1
     * @user
     */
    safetyBoard: string,
    /**
     * Robot Serial Number
     *
     * @api-version 1
     * @user
     */
    robotSerial: string,
    /**
     * Robot Model Name
     *
     * @api-version 1
     * @user
     */
    robotModel: string,
    /**
     * JTS Board Number
     *
     * @api-version 1
     * @user
     */
    jtsBoard: string,
    /**
     * Flange Board Number
     *
     * @api-version 1
     * @user
     */
    flangeBoard: string,
    /**
     * SVM Board Number
     *
     * @api-version 1
     * @user
     */
    svmBoard: string,

    /**
     * System information
     *
     * @api-version 1
     * @user
     */
    system: string,

    /**
     * OS Information
     *
     * @api-version 1
     * @user
     */
    os: string,

    /**
     * Process Button Enable
     *
     * @api-version 1
     * @user
     */
    processButton: boolean,

    /**
     * FTS Enable
     *
     * @api-version 1
     * @user
     */
    fts: boolean,

    /**
     * FTS Enable
     *
     * @api-version 1
     * @user
     */
    cockpit: CockpitType
}

/**
 *  Connected robot type.
 *
 * @enum
 * @api-version 2
 * @user
 */
export const RobotType = {
    /**
     * Not connected to Controller.
     *
     * @api-version 2
     * @user
     */
    NOT_CONNECTED: 0,
    /**
     * Connected to real robot.
     *
     * @api-version 2
     * @user
     */
    REAL: 1,
    /**
     * Connected to Dart-Simulator.
     *
     * @api-version 2
     * @user
     */
    SIMULATOR: 2
} as const;
/**
 * @ignore
 */
export type RobotType = typeof RobotType[keyof typeof RobotType];

/**
 * Enumeration constant for robot checksum state
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ChecksumState = {
    /**
     * state of matched normal & safety data
     *
     * @api-version 1
     * @user
     */
    MATCHED_DATA: 0,
    /**
     * state of unmatched normal data state
     *
     * @api-version 1
     * @user
     */
    UNMATCHED_NORMAL_DATA: 1,
    /**
     * state of unmatched safety data
     *
     * @api-version 1
     * @user
     */
    UNMATCHED_SAFETY_DATA: 2,
} as const;
/**
 * @ignore
 */
export type ChecksumState = typeof ChecksumState[keyof typeof ChecksumState];

/**
 * State of Mode Changed Callback
 *
 * @api-version 1
 * @user
 */
 export const ModeChangeState = {
    /**
     * Enter recovery mode.
     *
     * @api-version 1
     * @user
     */
    ENTER_RECOVERY_MODE: 0,
    /**
     * Enter backdrive mode
     *
     * @api-version 1
     * @user
     */
    ENTER_BACKDRIVE_MODE: 1,
    /**
     * Mode off
     *
     * @api-version 1
     * @user
     */
    MODE_OFF: 2,
} as const;
/**
 * @ignore
 */
export type ModeChangeState = typeof ModeChangeState[keyof typeof ModeChangeState];


/**
 * enumulation of remote control command
 *
 * @api-version 1
 * @user
 */
 export const RemoteControlCommand = {
    /**
     * unknown state
     *
     * @api-version 1
     * @user
     */
    UNKNOWN: 0,

    /**
     * servo on
     *
     * @api-version 1
     * @user
     */
    SERVO_ON: 1,
    /**
     * program start
     *
     * @api-version 1
     * @user
     */
    PROGRAM_START: 2,
    /**
     * program stop
     *
     * @api-version 1
     * @user
     */
    PROGRAM_STOP:3,
    /**
     * program pause
     *
     * @api-version 1
     * @user
     */
    PROGRAM_PAUSE:4,
    /**
     * program resume
     *
     * @api-version 1
     * @user
     */
    PROGRAM_RESUME:5,
    /**
     * power on
     *
     * @api-version 1
     * @user
     */
    POWER_ON:6,
    /**
     * power off
     *
     * @api-version 1
     * @user
     */
    POWER_OFF:7,
} as const;
/**
 * @ignore
 */
export type RemoteControlCommand = typeof RemoteControlCommand[keyof typeof RemoteControlCommand];

/**
 * Supported functions are different for each robot model.
 * A list of robot functions and whether they are supported.
 *
 * @api-version 1
 * @user
 */
 export type RobotFeatureList = {
    /**
    * Whether the FTS sensor is present.
    *
    * @api-version 1
    * @user
    */
    FTS: boolean,
    /**
    * Whether the JTS sensor is present.
    *
    * @api-version 1
    * @user
    */
    JTS: boolean,
    /**
    * Whether the free motion type direct teaching is available
    *
    * @api-version 1
    * @user
    */
    FreeTeaching: boolean,
    /**
    * Whether the constraints motion type direct teaching is available
    *
    * @api-version 1
    * @user
    */
    ConstraintsTeaching: boolean,
    /**
    * Whether collision detection is possible.
    *
    * @api-version 1
    * @user
    */
    CollisionDetection: boolean,
    /**
    * Whether or not the installation posture measurement function is supported.
    *
    * @api-version 1
    * @user
    */
    MeasureInstallPose: boolean,
    /**
    * Whether or not the tool weight measurement function is supported.
    *
    * @api-version 1
    * @user
    */
    MeasureToolWeight: boolean,
    /**
    * Whether the friction coefficient measurement function is supported.
    *
    * @api-version 1
    * @user
    */
    MeasureFriction: boolean,
    /**
    * Whether nudge is supported
    *
    * @api-version 1
    * @user
    */
    Nudge: boolean,
    /**
    * Whether cockpit is supported
    *
    * @api-version 1
    * @user
    */
    Cockpit: boolean,
    /**
    * Whether force control is available
    *
    * @api-version 1
    * @user
    */
    ForceControl: boolean,
    /**
    * Whether compliance control is available
    *
    * @api-version 1
    * @user
    */
    ComplianceControl: boolean,
    /**
    * Whether the force monitoring is supported.
    *
    * @api-version 1
    * @user
    */
    ForceMonitoring: boolean,
    /**
    * Whether home mastering is needed
    *
    * @api-version 1
    * @user
    */
    HomeMastering: boolean,
    /**
    * Whether it supports various installation postures.
    *
    * @api-version 1
    * @user
    */
    VariousInstallPose: boolean,
    /**
    * Whether to support gravity compensation function.
    *
    * @api-version 1
    * @user
    */
    GravityCompensation: boolean
}

/**
* Hardware specification
*
* @api-version 2
* @user
*/
export type RobotHardwareSpecification = {
    /**
    * Maximum reach. (mm)
    *
    * @api-version 2
    * @user
    */
    maxReach: number,

     /**
     * Maximum payload. (kg)
     *
     * @api-version 2
     * @user
     */
    payload: number,

     /**
     * Maximum payload when acceleration is limited (kg)
     *
     * @api-version 2
     * @user
     */
    payloadWithAceelerationLimit: number,

     /**
     * Hardware limitations related to joint space.
     *
     * @api-version 2
     * @user
     */
    jointHardLimit: {
        /**
         * Minimum joint range (degree)
         *
         * @api-version 2
         * @user
         */
        minRange: SixNumArray,
        /**
         * Maximum joint range (degree)
         *
         * @api-version 2
         * @user
         */
        maxRange: SixNumArray,
        /**
         * Maximum joint velocity (degree/s)
         *
         * @api-version 2
         * @user
         */
        maxVelocity: SixNumArray
    },
}

/**
 * List of measureFrictionValue Result
 *
 * @api-version 1
 * @user
 */
export type FrictionValueResult = {
    /**
     * target Friction
     *
     * @api-version 1
     * @user
     */
    result : SixNumArray,

    /**
     * Friction error
     *
     * @api-version 1
     * @user
     */
    error : SixNumArray,

    /**
     * positive Speed Factor
     *
     * @api-version 1
     * @user
     */
    positive : FourSixNumArray,

    /**
     * negative Speed Factor
     *
     * @api-version 1
     * @user
     */
    negative : FourSixNumArray,

    /**
     * temperature
     *
     * @api-version 1
     * @user
     */
    temperature : SixNumArray,
}


/**
 * Task data indicated by position and direction of each axis
 *
 * @api-version 1
 * @user
 */
export type TaskPositionAndDirection = {
    /**
     * pose. X,Y,Z,RZ,RY,RX
     *
     * @api-version 1
     * @user
     */
    pose: SixNumArray,

    /**
     * Direction along X
     *
     * @api-version 1
     * @user
     */
    directionX: ThreeNumArray,

    /**
     * Direction along Y
     *
     * @api-version 1
     * @user
     */
    directionY: ThreeNumArray,

    /**
     * Direction along Z
     *
     * @api-version 1
     * @user
     */
    directionZ: ThreeNumArray,
}

/**
 * TCP pose w.r.t Base, World, and Active User coordinate systems
 *
 * @api-version 1
 * @user
 */
export type TCPPoseInfo = {
    /**
     * TCP pose w.r.t Base
     *
     * @api-version 1
     * @user
     */
    baseToTCP: TaskPositionAndDirection,
    /**
     * TCP pose w.r.t World
     *
     * @api-version 1
     * @user
     */
    worldToTCP: TaskPositionAndDirection,
    /**
     * TCP pose w.r.t Active User
     *
     * @api-version 1
     * @user
     */
    userToTCP: TaskPositionAndDirection,
}

/**
 * error handling error
 *
 * @api-version 2
 * @user
 */
 export const ErrorHandlingState = {
    /**
     * Normal
     *
     * @api-version 2
     * @user
     */
    NORMAL: 0,
    /**
     * Error
     *
     * @api-version 2
     * @user
     */
    ERROR: 1,
} as const;
/**
 * @ignore
 */
export type ErrorHandlingState = typeof ErrorHandlingState[keyof typeof ErrorHandlingState];

/**
 * error handling mode
 *
 * @api-version 2
 * @user
 */
 export const ErrorHandlingMode = {
    /**
     * Normal
     *
     * @api-version 2
     * @user
     */
    NORMAL: 0,
    /**
     * Error
     *
     * @api-version 2
     * @user
     */
    WELDING: 1,
} as const;
/**
 * @ignore
 */
export type ErrorHandlingMode = typeof ErrorHandlingMode[keyof typeof ErrorHandlingMode];

/**
 * switch relay contract
 *
 * @api-version 2
 * @user
 */
 export const SwitchRelayContact = {
    /**
     * Normally open
     *
     * @api-version 2
     * @user
     */
    A: 0,
    /**
     * Normally close
     *
     * @api-version 2
     * @user
     */
    B: 1,
} as const;
/**
 * @ignore
 */
export type SwitchRelayContact = typeof SwitchRelayContact[keyof typeof SwitchRelayContact];
// [END] DRAS API /////////////////////////


// [START] Common (like as Parent interface) API /////////////////////////
/**
 * A class of set with APIs to interact with DART-Platform's system.
 *
 * @api-version 1
 * @user
 */
export class System {
    /**
     * Register a main class which is inherited {@link BaseModule}.
     * The class is needed to running Module's components ({@link ModuleScreen}, {@link ModuleService}) by system.
     * Below code should be added in a main script file by DART-IDE automatically when user build a module package.
     *
     * ```typescript
     * // IIFE for register a function to create an instance of main class which is inherited BaseModule.
     * (() => {
     *   System.registerModuleMainClassCreator(packageInfo => new MyModule(packageInfo))
     * })();
     *
     * class MyModule extends BaseModule {
     *     ...
     * }
     * ```
     *
     * @param creator A function to create instance of module's main class which is inherited {@link BaseModule}.
     * @return Return true if the creator is registered successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    static registerModuleMainClassCreator<T extends BaseModule>(creator: (packageInfo: IModulePackageInfo) => T): boolean {
        // @ts-ignore
        return window.registerModuleMainClassCreator(document.currentScript, creator);
    }
}

/**
 * A parent interface to be inherited on all system managers.
 *
 * @api-version 1
 * @user
 */
export interface ISystemManager {
}

/**
 * An abstract class to information about an environment.
 * It supports APIs to interact with DART-Platform's system.
 *
 * @api-version 1
 * @user
 */
export abstract class Context {
    // [START] Module Control System API /////////////////////////
    /**
     * Use with {@link getSystemManager} to retrieve {@link IModulePackageManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly MODULE_PACKAGE_MANAGER = "ModulePackageManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IModuleScreenManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly MODULE_SCREEN_MANAGER = "ModuleScreenManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IModuleServiceManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly MODULE_SERVICE_MANAGER = "ModuleServiceManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IDartStoreManager}.
     *
     * @api-version 1
     * @system
     */
    static readonly DART_STORE_MANAGER = "DartStoreManager";
    // [END] Module Control System API /////////////////////////


    // [START] Robot Control System API /////////////////////////
    /**
     * Use with {@link getSystemManager} to retrieve {@link IPositionManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly POSITION_MANAGER = "PositionManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link ICommunicationManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly COMMUNICATION_MANAGER = "CommunicationManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IMotionManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly MOTION_MANAGER = "MotionManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IProgramManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly PROGRAM_MANAGER = "ProgramManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IRobotManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly ROBOT_MANAGER = "RobotManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IAuthorityManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly AUTHORITY_MANGER = "AuthorityManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IMeasureManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly MEASURE_MANAGER = "MeasureManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IArcweldingManager}.
     *
     * @api-version 2
     * @user
     */
    static readonly ARCWELDING_MANAGER = "ArcweldingManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IRobotParameterManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly ROBOT_PARAMETER_MANAGER = "RobotParameterManager";
    // [END] Robot Control System API /////////////////////////


    // [START] Network Control System API /////////////////////////
    /**
     * Use with {@link getSystemManager} to retrieve {@link INetworkManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly NETWORK_MANAGER = "NetworkManager";
    // [END] Network Control System API /////////////////////////


    // [START] Data Control System API /////////////////////////
    /**
     * Use with {@link getSystemLibrary} to retrieve {@link IDartDatabase}.
     * It enables interacting with the file system in Windows, linux, macOS and Android.
     *
     * @api-version 1
     * @user
     */
    static readonly DART_DATABASE = "dart_database";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IDartBridgeManager}.
     *
     * @api-version 3
     * @system
     */
    static readonly DART_BRIDGE_MANAGER = "DartBridgeManager";
    // [END] Data Control System API /////////////////////////


    // [START] Etc Control System API /////////////////////////
    /**
     * Use with {@link getSystemManager} to retrieve {@link IConfigurationManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly CONFIGURATION_MANAGER = "ConfigurationManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link ISafetyPasswordManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly SAFETYPASSWORD_MANAGER = "SafetyPasswordManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IUpdateAndRestoreManager}.
     *
     * @api-version 1
     * @system
     */
    static readonly UPDATE_AND_RESTORE_MANAGER = "UpdateAndRestoreManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IResetAndRestoreManager}.
     *
     * @api-version 1
     * @system
     */
    static readonly RESET_RESTORE_MANAGER = "ResetAndRestoreManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IUserManager}.
     *
     * @api-version 1
     * @user
     */
    static readonly USER_MANAGER = "UserManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IClipboardManager}.
     *
     * @api-version 2
     * @system
     */
    static readonly CLIPBOARD_MANAGER = "ClipboardManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IAiManager}.
     *
     * @api-version 2
     * @user
     */
    static readonly AI_MANAGER = "AiManager";
    // [END] Etc Control System API /////////////////////////


    // [START] Dev System API /////////////////////////
    /**
     * Use with {@link getSystemManager} to retrieve {@link IDartIdeManager}.
     *
     * @api-version 1
     * @system
     */
    static readonly DART_IDE_MANAGER = "DartIdeManager";
    /**
     * Use with {@link getSystemManager} to retrieve {@link IDevManager}.
     *
     * @api-version 1
     * @system
     */
    static readonly DEV_MANAGER = "DevManager";
    // [END] Dev System API /////////////////////////


    // [START] Libraries /////////////////////////
    /**
     * Use with {@link getSystemLibrary} to retrieve {@link IDartFileSystem}.
     * It enables interacting with the file system in Windows, linux, macOS and Android.
     *
     * @api-version 1
     * @user
     */
    static readonly DART_FILE_SYSTEM = "dart_file_system";
    /**
     * Use with {@link getSystemLibrary} to retrieve {@link IFilePicker}.
     * The library provide APIs to get file from local storage.
     *
     * @api-version 2
     * @user
     */
    static readonly FILE_PICKER = "file_picker";
    /**
     * Use with {@link getSystemLibrary} to retrieve {@link IDartProcess}.ts
     * The library provide APIs to control process.
     *
     * @api-version 1
     * @system
     */
    static readonly DART_PROCESS = "dart_process";

    /**
     * Use with {@link getSystemLibrary} to retrieve {@link IExternalProcess}.ts
     * The library provide APIs to control process.
     *
     * @api-version 2
     * @system
     */
    static readonly EXTERNAL_PROCESS = "external_process";

    /**
     * Use with {@link getSystemLibrary} to retrieve {@link IMathLibrary}.
     *
     * @api-version 1
     * @user
     */
    static readonly MATH_LIBRARY = "MathLib";
    /**
     * Use with {@link getSystemLibrary} to retrieve {@link ITcpSocketLibrary}.
     *
     * @api-version 2
     * @user
     */
    static readonly TCP_SOCKET_LIBRARY = "TcpSocketLibrary";
    // [END] Libraries /////////////////////////


    /**
     * The unique name of the module package.
     * If the context is inherits SystemContext then this is set as 'system'.
     *
     * @api-version 1
     * @user
     */
    readonly packageName: string;

    /**
     * The component id.
     * If the context is inherits SystemContext then this is set as 'system'.
     *
     * @api-version 1
     * @user
     */
    readonly componentId: string;

    /**
     * A constructor to instantiate {@link Context}.
     *
     * @api-version 1
     * @system
     */
    protected constructor(packageName: string, componentId: string) {
        this.packageName = packageName;
        this.componentId = componentId;
    }

    /**
     * Whether the context has been destroyed or not.
     *
     * @api-version 3
     * @system
     */
    abstract setConfigurations(configs: { i18n?: i18n, stringResources?: Resource, t?: TFunction<string> }): Promise<void>;

    /**
     * Return a manager which is running in DART-Platform.
     * The manager of the returned object varies by the requested name.
     * Available names are:
     * - {@link MODULE_PACKAGE_MANAGER}
     * - {@link MODULE_SCREEN_MANAGER}
     * - {@link MODULE_SERVICE_MANAGER}
     * - {@link DART_STORE_MANAGER}
     * - {@link POSITION_MANAGER}
     * - {@link COMMUNICATION_MANAGER}
     * - {@link MOTION_MANAGER}
     * - {@link PROGRAM_MANAGER}
     * - {@link ROBOT_MANAGER}
     * - {@link AUTHORITY_MANGER}
     * - {@link MEASURE_MANAGER}
     * - {@link ROBOT_PARAMETER_MANAGER}
     * - {@link NETWORK_MANAGER}
     * - {@link DART_BRIDGE_MANAGER}
     * - {@link CONFIGURATION_MANAGER}
     * - {@link SAFETYPASSWORD_MANAGER}
     * - {@link UPDATE_AND_RESTORE_MANAGER}
     * - {@link RESET_RESTORE_MANAGER}
     * - {@link USER_MANAGER}
     * - {@link CLIPBOARD_MANAGER}
     * - {@link AI_MANAGER}
     * - {@link DART_IDE_MANAGER}
     * - {@link DEV_MANAGER}
     *
     * @param name The name of the desired manager.
     * @return The manager or null if there is no manager which is matched with the name.
     *
     * @api-version 1
     * @user
     */
    abstract getSystemManager(name: string): ISystemManager | null;

    /**
     * Return a system library which is support from DART-Platform.
     * The library of the returned object varies by the requested name.
     * Available names are:
     * - {@link DART_DATABASE}
     * - {@link DART_FILE_SYSTEM}
     * - {@link FILE_PICKER}
     * - {@link DART_PROCESS}
     * - {@link EXTERNAL_PROCESS}
     * - {@link MATH_LIBRARY}
     * - {@link TCP_SOCKET_LIBRARY}
     *
     * @param name The name of the desired library.
     * @param options Options for the desired library.
     * @return The library or null if there is no library which is matched with the name.
     *
     * @api-version 1
     * @user
     */
    abstract getSystemLibrary(name: string, options?: any): any;

    /**
     * Return the string value associated with a particular resource ID. It will be stripped of any styled text information.
     *
     * @param stringResourceName The desired resource key name.
     * @param options Options i18next options ({@link https://www.i18next.com/}).
     * @return A string matched with {@link stringResourceName}.
     *
     * @api-version 3
     * @user
     */
    abstract getString(stringResourceName: string, options?: TOptions<{ [key: string]: any }> | string): string;
}

/**
 * A {@link Context} for module.
 *
 * @api-version 1
 * @user
 */
export abstract class ModuleContext extends Context {
    /**
     * An object that is described about the module package.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    readonly packageInfo: IModulePackageInfo;

    /**
     * An object that is described about the component.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    readonly componentInfo: IModuleComponentInfo;

    /**
     * An object to apply system theme on the component.
     *
     * @api-version 1
     * @user
     */
    readonly systemTheme: any;

    /**
     * A screen's id which the ModuleScreen has been rendered.
     * It will be set as undefined if this context is for ModuleService component.
     *
     * @api-version 1
     * @user
     */
    readonly screenId?: string;

    /**
     * A screen's type which the ModuleScreen has been rendered.
     * It will be set as undefined if this context is for ModuleService component.
     *
     * @api-version 1
     * @user
     */
    readonly screenType?: ScreenType;

    /**
     * A constructor to instantiate {@link ModuleContext}.
     *
     * @api-version 1
     * @system
     */
    protected constructor(packageInfo: IModulePackageInfo, componentInfo: IModuleComponentInfo, systemTheme: any, screenId?: string, screenType?: ScreenType) {
        super(packageInfo.packageName, componentInfo.id);
        this.packageInfo = packageInfo;
        this.componentInfo = componentInfo;
        this.systemTheme = systemTheme;
        this.screenId = screenId;
        this.screenType = screenType;
    }

    /**
     * Call to initialize the requested User Component.
     *
     * @api-version 1
     * @system
     */
    abstract initializeUserComponent(component: UserComponent<any, any>, i18n: i18n, stringResources?: Resource): Promise<void>;
}

/**
 * A Message is a description of an operation to be performed.
 * It can be used with {@link IModulePackageManager.getModulePackageInfo}, {@link IModuleScreenManager.startModuleScreen}, etc.
 * Execution condition about each component of module package must be defined in messageFilters of manifest.json like as:
 *
 * ```json
 * "screens": [
 *   {
 *       "name": "Jog+",
 *       "id": "JogPlusMainScreen",
 *       "messageFilters": [
 *           {
 *               "action": "dart.message.action.MAIN",
 *               "category": "dart.message.category.SCREEN"
 *           }
 *       ]
 *   },
 * ],
 * ```
 *
 * @api-version 1
 * @user
 */
export class Message {
    /**
     * ModuleScreen Action: Represent as main screen component.
     * Module screens that {@link ACTION_MAIN} and {@link CATEGORY_SCREEN} declared together in the messageFilter of manifest.json can be run through icon in the home module.
     *
     * Now it is used with:
     * - {@link CATEGORY_SCREEN}
     * - {@link CATEGORY_FULL_SCREEN}
     * - {@link CATEGORY_POPUP_SCREEN}
     *
     * @api-version 1
     * @user
     */
    static readonly ACTION_MAIN = "dart.message.action.MAIN";

    /**
     * ModuleScreen Action: Request a run (DRL) program.
     * When user click the play button on Program Player at footer.
     *
     * Now it is used with:
     * - {@link CATEGORY_SCREEN}
     * - {@link CATEGORY_FULL_SCREEN}
     * - {@link CATEGORY_POPUP_SCREEN}
     *
     * @api-version 1
     * @user
     */
    static readonly ACTION_RUN_PROGRAM = "dart.message.action.RUN_PROGRAM";

    /**
     * ModuleScreen Action: Represents a recovery screen component in your Backdrive & Recovery module.
     *
     * Now it is used with:
     * - {@link CATEGORY_FULL_SCREEN}
     *
     * @api-version 1
     * @user
     */
    static readonly ACTION_RECOVERY = "dart.message.action.RECOVERY";

    /**
     * ModuleScreen Action: Represents a backdrive screen component in your Backdrive & Recovery module.
     *
     * Now it is used with:
     * - {@link CATEGORY_FULL_SCREEN}
     *
     * @api-version 1
     * @user
     */
    static readonly ACTION_BACKDRIVE = "dart.message.action.BACKDRIVE";

    /**
     * ModuleScreen Action: Represents a GNB simulator screen component in your GNB simulator module.
     *
     * Now it is used with:
     * - {@link CATEGORY_POPUP_SCREEN}
     *
     * @api-version 1
     * @user
     */
    static readonly ACTION_GNB_SIMULATOR = "dart.message.action.GNB_SIMULATOR";

    /**
     * IDartDatabase Action: Represents a {@link IDartDatabaseReader} which is contains records of 'deviceSettings' table.
     *
     * Now it is used with:
     * - {@link CATEGORY_DATABASE}
     *
     * @api-version 1
     * @user
     */
    static readonly ACTION_DEVICE_SETTINGS_DATABASE_READER = "dart.message.action.DEVICE_SETTINGS_DATABASE_READER";

    /**
     * ModuleService Action: Represents a service component to provide REST APIs to communicate with 3rd party AI Server.
     *
     * Now it is used with:
     * - {@link CATEGORY_SERVICE}
     *
     * @api-version 2
     * @user
     */
    static readonly ACTION_GET_REST_APIS_TO_COMMUNICATE_WITH_AI_SERVER = "dart.message.action.GET_REST_APIS_TO_COMMUNICATE_WITH_AI_SERVER";

    /**
     * ModuleScreen Category: A category for screen component.
     *
     * Now it is used with:
     * - {@link ACTION_MAIN}
     * - {@link ACTION_RUN_PROGRAM}
     * - custom actions
     *
     * @api-version 1
     * @user
     */
    static readonly CATEGORY_SCREEN = "dart.message.category.SCREEN";

    /**
     * ModuleScreen Category: A category for screen component which should be executed as Full screen.
     *
     * Now it is used with:
     * - {@link ACTION_MAIN}
     * - {@link ACTION_RUN_PROGRAM}
     * - {@link ACTION_RECOVERY}
     * - {@link ACTION_BACKDRIVE}
     * - custom actions
     *
     * @api-version 1
     * @system
     */
    static readonly CATEGORY_FULL_SCREEN = "dart.message.category.FULL_SCREEN";

    /**
     * ModuleScreen Category: A category for screen component which should be executed as Popup screen.
     *
     * Now it is used with:
     * - {@link ACTION_MAIN}
     * - {@link ACTION_RUN_PROGRAM}
     * - {@link ACTION_GNB_SIMULATOR}
     * - custom actions
     *
     * @api-version 1
     * @system
     */
    static readonly CATEGORY_POPUP_SCREEN = "dart.message.category.POPUP_SCREEN";

    /**
     * ModuleScreen Category: A category for screen component which should be executed as Picture-in-Picture.
     *
     * Now it is used with:
     * - custom actions
     *
     * @api-version 1
     * @user
     */
    static readonly CATEGORY_PIP_SCREEN = "dart.message.category.PIP_SCREEN";

    /**
     * ModuleService Category: A category for service component.
     *
     * Now it is used with:
     * - custom actions
     *
     * @api-version 1
     * @user
     */
    static readonly CATEGORY_SERVICE = "dart.message.category.SERVICE";

    /**
     * ModuleService Category: A category for database component.
     *
     * Now it is used with:
     * - custom actions
     *
     * @api-version 1
     * @user
     */
    static readonly CATEGORY_DATABASE = "dart.message.category.DATABASE";

    /**
     * The action to be performed, such as {@link ACTION_MAIN}, etc.
     *
     * @api-version 1
     * @user
     */
    action?: string;

    /**
     * Additional information about the action to execute, such as {@link CATEGORY_SCREEN}, {@link CATEGORY_SERVICE}, etc.
     *
     * @api-version 1
     * @user
     */
    category?: string;

    /**
     * Specifies an explicit module's package name to operate.
     *
     * @api-version 1
     * @user
     */
    packageName?: string;

    /**
     * Specifies an explicit service or screen component id of {@link packageName} module.
     * This property should be used with {@link packageName}, if not it will be ignored.
     *
     * @api-version 1
     * @user
     */
    componentId?: string;

    /**
     * The data to operate on the action.
     * It is a {@link Record} with a set of properties key ({@link string}) of value ({@link any}).
     *
     * @api-version 1
     * @user
     */
    data?: Record<string, any>;

    /**
     * A constructor to instantiate {@link Message}.
     *
     * @api-version 1
     * @user
     */
    constructor(args?: { action?: string, category?: string, packageName?: string, componentId?: string, data?: Record<string, any> }) {
        this.action = args?.action;
        this.category = args?.category;
        this.packageName = args?.packageName;
        this.componentId = args?.componentId;
        this.data = args?.data;
    }
}

/**
 * Structured description of {@link Message} values to be matched.
 * A MessageFilter can match against actions and categories in a {@link Message}.
 *
 * @api-version 1
 * @user
 */
export class MessageFilter {
    /**
     * The action to match, such as {@link Message.ACTION_MAIN}.
     *
     * @api-version 1
     * @user
     */
    readonly action?: string;

    /**
     * The category to match, such as {@link Message.CATEGORY_SCREEN}.
     *
     * @api-version 1
     * @user
     */
    readonly category?: string;

    /**
     * The packageName to match.
     *
     * @api-version 1
     * @user
     */
    readonly packageName?: string;

    /**
     * The component id to match.
     *
     * @api-version 1
     * @user
     */
    readonly componentId?: string;

    constructor(args: { action?: string, category?: string, packageName?: string, componentId?: string }) {
        this.action = args?.action;
        this.category = args?.category;
        this.packageName = args?.packageName;
        this.componentId = args?.componentId;
    }

    /**
     * Whether this filter matches the given message.
     *
     * @param message The message to compare with this filter.
     * @return Return true if the message's action and category are matched with the action and category.
     *
     * @api-version 1
     * @user
     */
    match(message: Message) {
        return (!!message.action || !!message.category || !!message.packageName || !!message.componentId)
            && (!message.action || (this.action === message.action))
            && (!message.category || (this.category === message.category))
            && (!message.packageName || (this.packageName === message.packageName))
            && (!message.componentId || (this.componentId === message.componentId));
    }
}

/**
 * An abstract class for monitor-able value.
 *
 * @api-version 1
 * @user
 */
export abstract class Monitorable<T> {
    /**
     * A current value
     *
     * @api-version 1
     * @user
     */
    abstract get value(): T;

    /**
     * A previous value.
     *
     * @api-version 1
     * @user
     */
    abstract get prevValue(): T;
    /**
     * Register a function to callback when value has been changed.
     *
     * @param context A caller's context.
     * @param callback A function to callback when value has been changed.
     * @param callbackAfterRegister Whether to receive callback of the current value after registering the callback.
     *
     * @api-version 1
     * @user
     */
    abstract register(context: Context, callback: ((value: T) => void), callbackAfterRegister?: boolean): void;

    /**
     * Unregister a function which has been registered.
     *
     * @param context A caller's context.
     * @param callback A function to unregister.
     *
     * @api-version 1
     * @user
     */
    abstract unregister(context: Context, callback: ((value: T) => void)): void;
}

/** @inheritDoc IEnvironment */
// @ts-ignore
export const Environment = (() => window.environment)() as IEnvironment;
/**
 * Provides system environment information.
 *
 * @api-version 1
 * @user
 */
export abstract class IEnvironment {
    static readonly OS_TYPE = {
        LIX: "lix",
        WIN: "win",
        MAC: "mac",
        ANDROID: "android"
    };
    abstract getOsType(): string;
    abstract getVersion(): string;
    abstract getSdkVersion(): string;
    abstract getCompatibleModuleSdkVersion(): string[];
}

/** @inheritDoc ILogger */
// @ts-ignore
export const logger = (() => window.logger)() as ILogger;
/**
 * Logger to logging a message on console or local storage.
 *
 * @api-version 1
 * @user
 */
export interface ILogger {
    /**
     * Prints a log. See {@link Console.debug}.
     *
     * @param msg A log to prints.
     * @api-version 1
     * @user
     */
    debug(msg: unknown): void;

    /**
     * Prints a log. See {@link Console.info}.
     *
     * @param msg A log to prints.
     * @api-version 1
     * @user
     */
    info(msg: unknown): void;

    /**
     * Prints a log. See {@link Console.error}.
     *
     * @param msg A log to prints.
     * @api-version 1
     * @user
     */
    error(msg: unknown): void;

    /**
     * Prints a log. See {@link Console.warn}.
     *
     * @param msg A log to prints.
     * @api-version 1
     * @user
     */
    warn(msg: unknown): void;
}
// [END] Common (like as Parent interface/class) API /////////////////////////


// [START] UI /////////////////////////
/**
 * An abstract class that contains information about a panel.
 *
 * @api-version 1
 * @user
 */
export abstract class Panel {
    /**
     * Type of panels.
     *
     * @enum
     * @api-version 1
     * @user
     */
    static readonly TYPE = {
        /**
         * Panel for Module's tab.
         *
         * @api-version 1
         * @user
         */
        MODULE_TAB:                 0x1000,
        /**
         * Panel for Module's popup screen.
         *
         * @api-version 1
         * @user
         */
        MODULE_POPUP_SCREEN:        0x1100,
        /**
         * Panel for Footer.
         *
         * @api-version 1
         * @user
         */
        FOOTER:                     0x1200,
        /**
         * Panel for Module's full screen.
         *
         * @api-version 1
         * @user
         */
        MODULE_FULL_SCREEN:         0x1300,
        /**
         * Panel for Header.
         *
         * @api-version 1
         * @user
         */
        HEADER:                     0x1400,
        /**
         * Panel for System Dialog.
         *
         * @api-version 1
         * @user
         */
        SYSTEM_DIALOG:              0x1500,
        /**
         * Panel for Toast.
         *
         * @api-version 1
         * @user
         */
        TOAST:                      0x1600,
        /**
         * Panel for Special popup such as Emergency Stop, Protective Stop, etc.
         *
         * @api-version 1
         * @user
         */
        SPECIAL:                    0x1700,
        /**
         * Panel for System's full screen such as Factory reset, Data export / import, etc.
         *
         * @api-version 1
         * @user
         */
        SYSTEM_FULL_SCREEN:         0x1800,
        /**
         * Panel for System Connection.
         *
         * @api-version 1
         * @user
         */
        SYSTEM_CONNECTION:          0x1900,
        /**
         * Panel for System error such as Connection Error, Version Mismatch, etc.
         *
         * @api-version 1
         * @user
         */
        SYSTEM_ERROR:               0x1A00
    } as const;
}

/**
 * Interface used to allow the creator of a dialog to run some code when the dialog is shown.
 *
 * @api-version 1
 * @user
 */
export interface OnShowListener {
    /**
     * This method will be invoked when the dialog is shown.
     *
     * @param dialog the dialog that received the click
     *
     * @api-version 1
     * @user
     */
    onShow(dialog: DialogInterface): void;
}

/**
 * Interface used to allow the creator of a dialog to run some code when the dialog is canceled.
 *
 * @api-version 1
 * @user
 */
export interface OnCancelListener {
    /**
     * This method will be invoked when the dialog is canceled.
     *
     * @param dialog the dialog that received the click
     *
     * @api-version 1
     * @user
     */
    onCancel (dialog: DialogInterface): void;
}

/**
 * Interface used to allow the creator of a dialog to run some code when the dialog is dismissed.
 *
 * @api-version 1
 * @user
 */
export interface OnDismissListener {
    /**
     * This method will be invoked when the dialog is dismissed.
     *
     * @param dialog the dialog that received the click
     *
     * @api-version 1
     * @user
     */
    onDismiss(dialog: DialogInterface): void;
}

/**
 * Interface used to allow the creator of a dialog to run some code when an item on the dialog is clicked.
 *
 * @api-version 1
 * @user
 */
export interface OnClickListener {
    /**
     * This method will be invoked when a button in the dialog is clicked.
     *
     * @param dialog the dialog that received the click
     * @param which the button that was clicked (ex. {@link DialogInterface.BUTTON_POSITIVE}).
     *
     * @api-version 1
     * @user
     */
    onClick(dialog: DialogInterface, which: number): void;
}

/**
 * Interface used to handle a dialog.
 * Constants for dialog are defined in {@link DialogInterface} namespace.
 *
 * @api-version 1
 * @user
 *
 */
export interface DialogInterface {
    /**
     * Get dialog id.
     *
     * @return Return the dialog id.
     *
     * @api-version 1
     * @user
     */
    getId(): string;

    /**
     * Whether the dialog is currently showing.
     *
     * @return Return true if the dialog is showing, otherwise false.
     *
     * @api-version 1
     * @user
     */
    isShowing(): boolean;

    /**
     * Cancels the dialog, invoking the OnCancelListener.
     *
     * @api-version 1
     * @user
     */
    cancel(): void;

    /**
     * Dismisses the dialog, invoking the OnDismissListener.
     *
     * @api-version 1
     * @user
     */
    dismiss(): void;
}

/**
 * Interface used to handle a dialog.
 *
 * @api-version 1
 * @user
 */
export module DialogInterface {
    /**
     * The id for the positive button.
     *
     * @api-version 1
     * @user
     */
    export const BUTTON_POSITIVE = 0;

    /**
     * The id for the negative button.
     *
     * @api-version 1
     * @user
     */
    export const BUTTON_NEGATIVE = 1;

    /**
     * The id for the neutral button.
     *
     * @api-version 3
     * @user
     */
    export const BUTTON_NEUTRAL = 2;

    /**
     * The id for the information icon.
     *
     * @api-version 1
     * @user
     */
    export const ICON_INFO = 0;

    /**
     * The id for the warning icon.
     *
     * @api-version 1
     * @user
     */
    export const ICON_WARN = 1;

    /**
     * The id for the error icon.
     *
     * @api-version 1
     * @user
     */
    export const ICON_ERROR = 2;

    /**
     * The id for the success icon.
     *
     * @api-version 1
     * @user
     */
    export const ICON_SUCCESS = 3;

    /**
     * The id for the normal width dialog (default).
     *
     * @api-version 1
     * @user
     */
    export const SIZE_NORMAL = 0;

    /**
     * The id for the extra small width dialog.
     *
     * @api-version 1
     * @user
     */
    export const SIZE_EXTRA_SMALL = 0x01;

    /**
     * The id for the small width dialog.
     *
     * @api-version 1
     * @user
     */
    export const SIZE_SMALL = 0x02;

    /**
     * The id for the large width dialog.
     *
     * @api-version 1
     * @user
     */
    export const SIZE_LARGE = 0x10;

    /**
     * The id for the alignment of dialog.
     *
     * @api-version 1
     * @user
     */
    export const ALIGN_CENTER = 0;

    /**
     * The id for the alignment of dialog.
     *
     * @api-version 1
     * @user
     */
    export const ALIGN_START = 1;

    /**
     * The id for the alignment of dialog.
     *
     * @api-version 1
     * @user
     */
    export const ALIGN_END = 2;

    /**
     * The id for the anchor type for dialog's position.
     *
     * @api-version 1
     * @user
     */
    export const ANCHOR_TYPE_TOP_LEFT = 0;

    /**
     * The id for the anchor type for dialog's position.
     *
     * @api-version 1
     * @user
     */
    export const ANCHOR_TYPE_TOP_RIGHT = 1;

    /**
     * The id for the anchor type for dialog's position.
     *
     * @api-version 1
     * @user
     */
    export const ANCHOR_TYPE_BOTTOM_LEFT = 2;

    /**
     * The id for the anchor type for dialog's position.
     *
     * @api-version 1
     * @user
     */
    export const ANCHOR_TYPE_BOTTOM_RIGHT = 3;
}

/**
 * Interface to handle a button.
 *
 * @api-version 1
 * @user
 */
export interface ButtonInterface {
    /**
     * Sets the text to be displayed.
     *
     * @api-version 1
     * @user
     */
    setText(text: string): void;
    /**
     * Set the enabled state.
     *
     * @api-version 1
     * @user
     */
    setEnabled(enabled: boolean): void;
    /**
     * Set the hidden state.
     *
     * @api-version 1
     * @user
     */
    setHidden(hidden: boolean): void;
    /**
     * Set the start icon.
     *
     * @api-version 3
     * @user
     */
    setStartIcon(icon?: React.ReactNode): void;
    /**
     * Set the end icon.
     *
     * @api-version 3
     * @user
     */
    setEndIcon(icon?: React.ReactNode): void;
    /**
     * Set the {@link OnClickListener} to be invoked when this button is pressed.
     *
     * @api-version 1
     * @user
     */
    setOnClickListener(listener: OnClickListener): void;
}

/**
 * Interface to handle a close button.
 *
 * @api-version 1
 * @user
 */
export interface CloseButtonInterface {
    /**
     * Set the enabled state.
     *
     * @api-version 1
     * @user
     */
    setEnabled(enabled: boolean): void;

    /**
     * Set the hidden state.
     *
     * @api-version 1
     * @user
     */
    setHidden(hidden: boolean): void;
}

/**
 * Properties for button on Dialog.
 *
 * @api-version 3
 * @user
 */
export type ButtonProps = {
    /**
     * Text to be displayed.
     *
     * @api-version 3
     * @user
     */
    text?: string,
    /**
     * Enabled state. Default is true.
     *
     * @api-version 3
     * @user
     */
    enabled?: boolean,
    /**
     * Element placed before the text.
     *
     * @api-version 3
     * @user
     */
    startIcon?: React.ReactNode,
    /**
     * Element placed after the text.
     *
     * @api-version 3
     * @user
     */
    endIcon?: React.ReactNode
};

/** @inheritDoc IDialog */
// @ts-ignore
export const Dialog = (() => window.Dialog)() as (new <T extends IDialog>(...args: any[]) => T);
/**
 * A class to handle a dialog.
 *
 * @api-version 1
 * @user
 */
export interface IDialog extends DialogInterface {
    /**
     * Set an icon type.
     * Available icon types are:
     * - {@link DialogInterface.ICON_INFO}
     * - {@link DialogInterface.ICON_WARN}
     * - {@link DialogInterface.ICON_ERROR}
     * - {@link DialogInterface.ICON_SUCCESS}
     *
     * @param icon Type of an icon.
     *
     * @api-version 1
     * @user
     */
    setIcon(icon: number): void;

    /**
     * Set an custom icon.
     * @param icon icon.
     *
     * @api-version 3
     * @user
     */
    setCustomIcon(icon: React.ReactNode): void;

    /**
     * Set the title text for this dialog.
     *
     * @param text A text to display in the title.
     *
     * @api-version 1
     * @user
     */
    setTitle(text: string): void;

    /**
     * Set the title view for this dialog.
     * You cannot change a title view after call {@link IDialog.show}.
     *
     * @param view A view to display in the custom title view area.
     *
     * @api-version 1
     * @user
     */
    setTitleView(view: JSX.Element): void;

    /**
     * Set the message for this dialog.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setMessage(text: string): void;

    /**
     * Set the secondary message for this dialog.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setSecondaryMessage(text: string): void;

    /**
     * Set the emphasis message for this dialog.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setEmphasisMessage(text: string): void;

    /**
     * Set the detail message for this dialog.
     *
     * @param text A text to display in the detail content.
     * @param collapsible Set as collapsible a detail message view.
     * @param expanded Set as expand a detail message view. It works when you set {@link collapsible} as true.
     *
     * @api-version 1
     * @user
     */
    setDetailMessage(text: string, collapsible: boolean, expanded: boolean): void;

    /**
     * Set the content view for this dialog.
     * You cannot change a content view after call {@link IDialog.show}.
     *
     * @param view A view to display in the custom content view area.
     *
     * @api-version 1
     * @user
     */
    setContentView(view: JSX.Element): void;

    /**
     * Gets one interface of the buttons used in the dialog. Returns null if the specified button does not exist or the dialog has not yet been fully created.
     *
     * @param which Which button to get a {@link ButtonInterface}.
     * @return Return a {@link ButtonInterface} about the {@link which}, otherwise null.
     *
     * @api-version 1
     * @user
     */
    getButtonInterface(which: number): ButtonInterface | null;

    /**
     * Set a button.
     *
     * @param which Which button to set.
     * @param text A text to display in the button.
     * @param enabled Whether the button is enabled or not.
     * @param listener A {@link OnClickListener} to be invoked when this button is pressed.
     *
     * @api-version 1
     * @user
     */
    setButton(which: number, text: string, enabled: boolean, listener: OnClickListener): void;

    /**
     * Set a button.
     *
     * @param which Which button to set.
     * @param props {@link ButtonProps}
     * @param listener A {@link OnClickListener} to be invoked when this button is pressed.
     *
     * @api-version 3
     * @user
     */
    setButtonWithProps(which: number, props: ButtonProps, listener: OnClickListener): void;

    /**
     * Gets an interface to handle close button. Returns null if the button does not set or the dialog has not yet been fully created.
     *
     * @return Return a {@link CloseButtonInterface} about the {@link which}, otherwise null.
     *
     * @api-version 1
     * @user
     */
    getCloseButtonInterface(): CloseButtonInterface | null;

    /**
     * Set a close button in the dialog.
     * The button is shown at top right corner in the dialog.
     * If user close a dialog via this button, then {@link OnCancelListener} will be called.
     *
     * @param enabled Set whether the close button is enabled or not.
     *
     * @api-version 1
     * @user
     */
    setCloseButton(enabled: boolean): void;

    /**
     * Sets whether this dialog is canceled when touched outside the dialog's bounds.
     * If user close a dialog via touched outside the dialog's bounds, then {@link OnCancelListener} will be called.
     *
     * @param cancelable Whether the dialog should be canceled when touched outside the dialog's bounds.
     *
     * @api-version 1
     * @user
     */
    setCancelable(cancelable: boolean): void;

    /**
     * Set a background dim on the dialog.
     * You cannot change a title view after call {@link IDialog.show}.
     *
     * @param enabled Set whether the background dim is enabled or not.
     *
     * @api-version 1
     * @user
     */
    setBackgroundDim(enabled: boolean): void;

    /**
     * Sets a listener to be invoked when the dialog is shown.
     *
     * @param listener The {@link OnShowListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnShowListener(listener: OnShowListener): void;

    /**
     * Sets a listener to be invoked when the dialog is dismissed.
     *
     * @param listener The {@link OnDismissListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnDismissListener(listener: OnDismissListener): void;

    /**
     * Sets a listener to be invoked when the dialog is canceled.
     *
     * @param listener The {@link OnCancelListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnCancelListener(listener: OnCancelListener): void;

    /**
     * Show a dialog.
     * If module want to show a dialog on the system layer than it should be set the {@link Manifest.PERMISSION_SYSTEM_DIALOG}.
     * But a module which has a user permission can only show a dialog on the {@link Panel.TYPE.SYSTEM_DIALOG} even if it has the {@link Manifest.PERMISSION_SYSTEM_DIALOG}.
     * Available panel types are:
     * - {@link Panel.TYPE.MODULE_TAB}
     * - {@link Panel.TYPE.MODULE_POPUP_SCREEN}
     * - {@link Panel.TYPE.MODULE_FULL_SCREEN}
     * - {@link Panel.TYPE.SYSTEM_DIALOG}
     * - {@link Panel.TYPE.SPECIAL}
     * - {@link Panel.TYPE.SYSTEM_FULL_SCREEN}
     * - {@link Panel.TYPE.SYSTEM_CONNECTION}
     * - {@link Panel.TYPE.SYSTEM_ERROR}
     *
     * @param panelType A Panel type (ex. {@link Panel.TYPE.SYSTEM_DIALOG}) to show the dialog. If the context is an instance of System context, than the default is {@link Panel.TYPE.SYSTEM_DIALOG}, otherwise {@link Panel.TYPE.MODULE_TAB}.
     *
     * @api-version 1
     * @user
     * @permission {@link Manifest.PERMISSION_SYSTEM_DIALOG}
     */
    show(panelType?: number): void;
}

/** @inheritDoc IDialogBuilder */
// @ts-ignore
export const DialogBuilder = (() => window.DialogBuilder)() as (new <T extends IDialogBuilder>(...args: any[]) => T);
/**
 * A class to build a dialog.
 *
 * @api-version 1
 * @user
 */
export interface IDialogBuilder {
    /**
     * Set an icon type.
     * Available icon types are:
     * - {@link DialogInterface.ICON_INFO}
     * - {@link DialogInterface.ICON_WARN}
     * - {@link DialogInterface.ICON_ERROR}
     * - {@link DialogInterface.ICON_SUCCESS}
     *
     * @param icon Type of an icon.
     *
     * @api-version 1
     * @user
     */
    setIcon(icon: number): IDialogBuilder;

    /**
     * Set the title text for this dialog.
     *
     * @param text A text to display in the title.
     *
     * @api-version 1
     * @user
     */
    setTitle(text: string): IDialogBuilder;

    /**
     * Set the title view for this dialog.
     *
     * @param view A view to display in the custom title view area.
     *
     * @api-version 1
     * @user
     */
    setTitleView(view: JSX.Element): IDialogBuilder;

    /**
     * Set the message for this dialog.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setMessage(text: string): IDialogBuilder;

    /**
     * Set the secondary message for this dialog.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setSecondaryMessage(text: string): IDialogBuilder;

    /**
     * Set the emphasis message for this dialog.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setEmphasisMessage(text: string): IDialogBuilder;

    /**
     * Set the detail message for this dialog.
     *
     * @param text A text to display in the detail content.
     * @param collapsible Set as collapsible a detail message view.
     * @param expanded Set as expand a detail message view. It works when you set {@link collapsible} as true.
     *
     * @api-version 1
     * @user
     */
    setDetailMessage(text: string, collapsible: boolean, expanded: boolean): IDialogBuilder;

    /**
     * Set the content view for this dialog.
     *
     * @param view A view to display in the custom content view area.
     *
     * @api-version 1
     * @user
     */
    setContentView(view: JSX.Element): IDialogBuilder;

    /**
     * Set a button.
     *
     * @param which Which button to set.
     * @param text A text to display in the button.
     * @param enabled True if this view is enabled, false otherwise.
     * @param listener A {@link OnClickListener} to be invoked when this button is pressed.
     *
     * @api-version 1
     * @user
     */
    setButton(which: number, text: string, enabled: boolean, listener: OnClickListener): IDialogBuilder;

    /**
     * Set a button.
     *
     * @param which Which button to set.
     * @param props {@link ButtonProps}
     * @param listener A {@link OnClickListener} to be invoked when this button is pressed.
     *
     * @api-version 3
     * @user
     */
    setButtonWithProps(which: number, props: ButtonProps, listener: OnClickListener): IDialogBuilder;

    /**
     * Sets a close button in the dialog.
     * The button is shown at top right corner in the dialog.
     * If user close a dialog via this button, then {@link OnCancelListener} will be called.
     *
     * @param enabled Set whether the close button is enabled or not.
     *
     * @api-version 1
     * @user
     */
    setCloseButton(enabled: boolean): IDialogBuilder;

    /**
     * Sets whether this dialog is canceled when touched outside the dialog's bounds.
     * If user close a dialog via touched outside the dialog's bounds, then {@link OnCancelListener} will be called.
     *
     * @param cancelable Whether the dialog should be canceled when touched outside the dialog's bounds.
     *
     * @api-version 1
     * @user
     */
    setCancelable(cancelable: boolean): IDialogBuilder;

    /**
     * Set a background dim on the dialog.
     *
     * @param enabled Set whether the background dim is enabled or not.
     *
     * @api-version 1
     * @user
     */
    setBackgroundDim(enabled: boolean): IDialogBuilder;

    /**
     * Sets a listener to be invoked when the dialog is shown.
     *
     * @param listener The {@link OnShowListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnShowListener(listener: OnShowListener): IDialogBuilder;

    /**
     * Sets a listener to be invoked when the dialog is dismissed.
     *
     * @param listener The {@link OnDismissListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnDismissListener(listener: OnDismissListener): IDialogBuilder;

    /**
     * Sets a listener to be invoked when the dialog is canceled.
     *
     * @param listener The {@link OnCancelListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnCancelListener(listener: OnCancelListener): IDialogBuilder;

    /**
     * Create an instance of {@link IDialog} with the arguments supplied to this builder.
     *
     * @return Return an instance of {@link IDialog}.
     *
     * @api-version 1
     * @user
     */
    build(): IDialog;
}

/** @inheritDoc IBoardDialog */
// @ts-ignore
export const BoardDialog = (() => window.BoardDialog)() as (new <T extends IBoardDialog>(...args: any[]) => T);
/**
 * A class to handle a board dialog.
 *
 * @api-version 1
 * @system
 */
export interface IBoardDialog extends DialogInterface {
    /**
     * Set a dialog width type.
     * You cannot change a dialog size after call {@link IBoardDialog.show}.
     *
     * Available types are:
     * - {@link DialogInterface.SIZE_NORMAL}
     * - {@link DialogInterface.SIZE_EXTRA_SMALL}
     * - {@link DialogInterface.SIZE_SMALL}
     * - {@link DialogInterface.SIZE_LARGE}
     *
     * @param size Type of a width size.
     *
     * @api-version 1
     * @user
     */
    setSize(size: number): void;

    /**
     * Set a dialog anchor position. The coordinates are relative to the application's client area.
     * If anchor has been set, then {@link setAlignment} will be ignored.
     * You cannot change a dialog anchor after call {@link IBoardDialog.show}.
     *
     * Available anchor types are:
     * - {@link DialogInterface.ANCHOR_TYPE_TOP_LEFT}
     * - {@link DialogInterface.ANCHOR_TYPE_TOP_RIGHT}
     * - {@link DialogInterface.ANCHOR_TYPE_BOTTOM_LEFT}
     * - {@link DialogInterface.ANCHOR_TYPE_BOTTOM_RIGHT}
     *
     * @param anchorType A type of anchor where is for  dialog.
     * @param position A two positions that may be to set the position of the dialog.
     *
     * @api-version 1
     * @user
     */
    setAnchor(anchorType: number, position: number[]): void;

    /**
     * Set a dialog's alignment.
     * If {@link setAnchor} has been set, then alignment will be ignored.
     * You cannot change a dialog alignment after call {@link IBoardDialog.show}.
     *
     * Available alignment types are:
     * - {@link DialogInterface.ALIGN_CENTER}
     * - {@link DialogInterface.ALIGN_END}
     * - {@link DialogInterface.ALIGN_START}
     *
     * @param horizontal A type of horizontal alignment. Default is {@link DialogInterface.ALIGN_CENTER}.
     * @param vertical A type of vertical alignment. Default is {@link DialogInterface.ALIGN_CENTER}.
     *
     * @api-version 1
     * @user
     */
    setAlignment(horizontal: number, vertical: number): void;

    /**
     * Set the title text for this dialog. If trimmed text's length is 0, then title area will be hidden.
     * But, it is impossible use only close button without title. So if you want to remove title then remove close button before.
     *
     * @param text A text to display in the title.
     *
     * @api-version 1
     * @user
     */
    setTitle(text: string): void;

    /**
     * Set the message for this dialog.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setMessage(text: string): void;

    /**
     * Set the content view for this dialog.
     * You cannot change a content view after call {@link IBoardDialog.show}.
     *
     * @param view A view to display in the custom content view area.
     *
     * @api-version 1
     * @user
     */
    setContentView(view: JSX.Element): void;

    /**
     * Gets one interface of the buttons used in the dialog. Returns null if the specified button does not exist or the dialog has not yet been fully created.
     *
     * @param which Which button to get a {@link ButtonInterface}.
     * @return Return a {@link ButtonInterface} about the {@link which}, otherwise null.
     *
     * @api-version 1
     * @user
     */
    getButtonInterface(which: number): ButtonInterface | null;

    /**
     * Set a button.
     *
     * @param which Which button to set.
     * @param text A text to display in the button.
     * @param enabled Whether the button is enabled or not.
     * @param listener A {@link OnClickListener} to be invoked when this button is pressed.
     *
     * @api-version 1
     * @user
     */
    setButton(which: number, text: string, enabled: boolean, listener: OnClickListener): void;

    /**
     * Set a button.
     *
     * @param which Which button to set.
     * @param props {@link ButtonProps}
     * @param listener A {@link OnClickListener} to be invoked when this button is pressed.
     *
     * @api-version 3
     * @user
     */
    setButtonWithProps(which: number, props: ButtonProps, listener: OnClickListener): void;

    /**
     * Gets an interface to handle close button. Returns null if the button does not set or the dialog has not yet been fully created.
     *
     * @return Return a {@link CloseButtonInterface} about the {@link which}, otherwise null.
     *
     * @api-version 1
     * @user
     */
    getCloseButtonInterface(): CloseButtonInterface | null;

    /**
     * Set a close button in the dialog. The button is shown at top right corner in the dialog.
     * It is impossible use only close button without title. So if you want to use close button, then set title before.
     * If user close a dialog via this button, then {@link OnCancelListener} will be called.
     *
     * @param enabled Set whether the close button is enabled or not.
     *
     * @api-version 1
     * @user
     */
    setCloseButton(enabled: boolean): void;

    /**
     * Sets whether this dialog is canceled when touched outside the dialog's bounds.
     * If user close a dialog via touched outside the dialog's bounds, then {@link OnCancelListener} will be called.
     *
     * @param cancelable Whether the dialog should be canceled when touched outside the dialog's bounds.
     *
     * @api-version 1
     * @user
     */
    setCancelable(cancelable: boolean): void;

    /**
     * Sets whether this dialog is draggable.
     * It a dialog is set as draggable, then {@link setAnchor}, {@link setAlignment} and {@link setCancelable} will be ignored.
     * You cannot change a dialog size after call {@link IBoardDialog.show}.
     *
     * @param draggable Whether the dialog is draggable.
     * @param defaultPosition The [x, y] position at which the popup screen will be displayed. If is not set, then the dialog will be positioned at center.
     *
     * @api-version 1
     * @system
     */
    setDraggable(draggable: boolean, defaultPosition?: { x?: number, y?: number }): void;

    /**
     * Set a background dim on the dialog.
     * You cannot change a title view after call {@link IBoardDialog.show}.
     *
     * @param enabled Set whether the background dim is enabled or not.
     *
     * @api-version 1
     * @user
     */
    setBackgroundDim(enabled: boolean): void;

    /**
     * Sets a listener to be invoked when the dialog is shown.
     *
     * @param listener The {@link OnShowListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnShowListener(listener: OnShowListener): void;

    /**
     * Sets a listener to be invoked when the dialog is dismissed.
     *
     * @param listener The {@link OnDismissListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnDismissListener(listener: OnDismissListener): void;

    /**
     * Sets a listener to be invoked when the dialog is canceled.
     *
     * @param listener The {@link OnCancelListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnCancelListener(listener: OnCancelListener): void;

    /**
     * Show a dialog.
     * If module want to show a dialog on the system layer than it should be set the {@link Manifest.PERMISSION_SYSTEM_DIALOG}.
     * But a module which has a user permission can only show a dialog on the {@link Panel.TYPE.SYSTEM_DIALOG} even if it has the {@link Manifest.PERMISSION_SYSTEM_DIALOG}.
     * Available panel types are:
     * - {@link Panel.TYPE.MODULE_TAB}
     * - {@link Panel.TYPE.MODULE_POPUP_SCREEN}
     * - {@link Panel.TYPE.MODULE_FULL_SCREEN}
     * - {@link Panel.TYPE.SYSTEM_DIALOG}
     * - {@link Panel.TYPE.SPECIAL}
     * - {@link Panel.TYPE.SYSTEM_FULL_SCREEN}
     * - {@link Panel.TYPE.SYSTEM_CONNECTION}
     * - {@link Panel.TYPE.SYSTEM_ERROR}
     *
     * @param panelType A Panel type (ex. {@link Panel.TYPE.SYSTEM_DIALOG}) to show the dialog. If the context is an instance of System context, than the default is {@link Panel.TYPE.SYSTEM_DIALOG}, otherwise {@link Panel.TYPE.MODULE_TAB}.
     *
     * @api-version 1
     * @user
     * @permission {@link Manifest.PERMISSION_SYSTEM_DIALOG}
     */
    show(panelType?: number): void;

    /**
     * Whether the dialog is currently showing.
     *
     * @return Return true if the dialog is showing, otherwise false.
     *
     * @api-version 1
     * @user
     */
    isShowing(): boolean;

    /**
     * Cancels the dialog, invoking the OnCancelListener.
     *
     * @api-version 1
     * @user
     */
    cancel(): void;

    /**
     * Dismisses the dialog, invoking the OnDismissListener.
     *
     * @api-version 1
     * @user
     */
    dismiss(): void;
}

/** @inheritDoc IBoardDialogBuilder */
// @ts-ignore
export const BoardDialogBuilder = (() => window.BoardDialogBuilder)() as (new <T extends IBoardDialogBuilder>(...args: any[]) => T);
/**
 * A class to build a board dialog.
 *
 * @api-version 1
 * @system
 */
export interface IBoardDialogBuilder {
    /**
     * Set a dialog width type.
     *
     * Available types are:
     * - {@link DialogInterface.SIZE_NORMAL}
     * - {@link DialogInterface.SIZE_EXTRA_SMALL}
     * - {@link DialogInterface.SIZE_SMALL}
     * - {@link DialogInterface.SIZE_LARGE}
     *
     * @param size Type of a width size.
     *
     * @api-version 1
     * @user
     */
    setSize(size: number): IBoardDialogBuilder;

    /**
     * Set a dialog anchor position. The coordinates are relative to the application's client area.
     * If anchor has been set, then {@link setAlignment} will be ignored.
     *
     * Available anchor types are:
     * - {@link DialogInterface.ANCHOR_TYPE_TOP_LEFT}
     * - {@link DialogInterface.ANCHOR_TYPE_TOP_RIGHT}
     * - {@link DialogInterface.ANCHOR_TYPE_BOTTOM_LEFT}
     * - {@link DialogInterface.ANCHOR_TYPE_BOTTOM_RIGHT}
     *
     * @param anchorType A type of anchor where is for  dialog.
     * @param position A two positions that may be to set the position of the dialog.
     *
     * @api-version 1
     * @user
     */
    setAnchor(anchorType: number, position: number[]): IBoardDialogBuilder;

    /**
     * Set a dialog's alignment.
     * If {@link setAnchor} has been set, then alignment will be ignored.
     *
     * Available alignment types are:
     * - {@link DialogInterface.ALIGN_CENTER}
     * - {@link DialogInterface.ALIGN_END}
     * - {@link DialogInterface.ALIGN_START}
     *
     * @param horizontal A type of horizontal alignment. Default is {@link DialogInterface.ALIGN_CENTER}.
     * @param vertical A type of vertical alignment. Default is {@link DialogInterface.ALIGN_CENTER}.
     *
     * @api-version 1
     * @user
     */
    setAlignment(horizontal: number, vertical: number): IBoardDialogBuilder;

    /**
     * Set the title text for this dialog.
     *
     * @param text A text to display in the title.
     *
     * @api-version 1
     * @user
     */
    setTitle(text: string): IBoardDialogBuilder;

    /**
     * Set the message for this dialog.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setMessage(text: string): IBoardDialogBuilder;

    /**
     * Set the content view for this dialog.
     *
     * @param view A view to display in the custom content view area.
     *
     * @api-version 1
     * @user
     */
    setContentView(view: JSX.Element): IBoardDialogBuilder;

    /**
     * Set a button.
     *
     * @param which Which button to set.
     * @param text A text to display in the button.
     * @param enabled True if this view is enabled, false otherwise.
     * @param listener A {@link OnClickListener} to be invoked when this button is pressed.
     *
     * @api-version 1
     * @user
     */
    setButton(which: number, text: string, enabled: boolean, listener: OnClickListener): IBoardDialogBuilder;

    /**
     * Set a button.
     *
     * @param which Which button to set.
     * @param props {@link ButtonProps}
     * @param listener A {@link OnClickListener} to be invoked when this button is pressed.
     *
     * @api-version 3
     * @user
     */
    setButtonWithProps(which: number, props: ButtonProps, listener: OnClickListener): IBoardDialogBuilder;

    /**
     * Sets a close button in the dialog.
     * The button is shown at top right corner in the dialog.
     * If user close a dialog via this button, then {@link OnCancelListener} will be called.
     *
     * @param enabled Set whether the close button is enabled or not.
     *
     * @api-version 1
     * @user
     */
    setCloseButton(enabled: boolean): IBoardDialogBuilder;

    /**
     * Sets whether this dialog is canceled when touched outside the dialog's bounds.
     * If user close a dialog via touched outside the dialog's bounds, then {@link OnCancelListener} will be called.
     *
     * @param cancelable Whether the dialog should be canceled when touched outside the dialog's bounds.
     *
     * @api-version 1
     * @user
     */
    setCancelable(cancelable: boolean): IBoardDialogBuilder;

    /**
     * Sets whether this dialog is draggable.
     * It a dialog is set as draggable, then {@link setAnchor}, {@link setAlignment} and {@link setCancelable} will be ignored.
     *
     * @param draggable Whether the dialog is draggable.
     * @param defaultPosition The [x, y] position at which the popup screen will be displayed. If is not set, then the dialog will be positioned at center.
     *
     * @api-version 1
     * @system
     */
    setDraggable(draggable: boolean, defaultPosition?: { x?: number, y?: number }): IBoardDialogBuilder;

    /**
     * Set a background dim on the dialog.
     *
     * @param enabled Set whether the background dim is enabled or not.
     *
     * @api-version 1
     * @user
     */
    setBackgroundDim(enabled: boolean): IBoardDialogBuilder;

    /**
     * Sets a listener to be invoked when the dialog is shown.
     *
     * @param listener The {@link OnShowListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnShowListener(listener: OnShowListener): IBoardDialogBuilder;

    /**
     * Sets a listener to be invoked when the dialog is dismissed.
     *
     * @param listener The {@link OnDismissListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnDismissListener(listener: OnDismissListener): IBoardDialogBuilder;

    /**
     * Sets a listener to be invoked when the dialog is canceled.
     *
     * @param listener The {@link OnCancelListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnCancelListener(listener: OnCancelListener): IBoardDialogBuilder;

    /**
     * Create an instance of {@link IBoardDialog} with the arguments supplied to this builder.
     *
     * @return Return an instance of {@link IBoardDialog}.
     *
     * @api-version 1
     * @user
     */
    build(): IBoardDialog;
}

/** @inheritDoc IToast */
// @ts-ignore
export const Toast = (() => window.Toast)() as IToast;
/**
 * A class to display message as Toast.
 * Only 5 Toasts can be displayed at the same time, each toast will be displayed for 3 seconds and then disappear automatically.
 *
 * @api-version 1
 * @user
 */
export abstract class IToast {
    /**
     * Information message type.
     *
     * @api-version 1
     * @user
     */
    static readonly TYPE_INFO = 0;

    /**
     * Warning message type.
     *
     * @api-version 1
     * @user
     */
    static readonly TYPE_WARN = 1;

    /**
     * Error message type.
     *
     * @api-version 1
     * @user
     */
    static readonly TYPE_ERROR = 2;

    /**
     * Success message type.
     *
     * @api-version 1
     * @user
     */
    static readonly TYPE_SUCCESS = 3;

    /**
     * Show toast title and message.
     *
     * @param type A type of the toast {@link IToast.TYPE}.
     * @param title A title text to show. It cannot exceed one line.
     * @param message A message text to show. It cannot exceed two line.
     * @param preventDuplicated Ignores displaying multiple snackbars with the same 'type', 'title' and 'message'.
     *
     * @api-version 1
     * @user
     */
    abstract show(type: number, title: string | null, message: string, preventDuplicated?: boolean): void;
}

/**
 * Interface used to handle a snackbar.
 *
 * @api-version 1
 * @user
 */
export interface SnackbarInterface {
    /**
     * Set a title text.
     * If user set a text as null or empty then the title view's area will be gone.
     *
     * @param text A text to display in the title.
     *
     * @api-version 1
     * @user
     */
    setTitle(text: string | null): void;

    /**
     * Set a message. The message is mandatory, so it couldn't be empty.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setMessage(text: string): void;

    /**
     * Get current progress. If progress is not set as 'determinate' then it will be return 0 always.
     *
     * @return A value of the current progress.
     *
     * @api-version 1
     * @user
     */
    getProgress(): number;

    /**
     * Set a value of the progress indicator for the determinate. Value between 0 and 100.
     * It is applied when only the snackbar has been set a progressbar as 'determinate' through {@link ISnackbarBuilder.setProgress}.
     *
     * @param progress A value of the progress indicator for the determinate. Value between 0 and 100.
     *
     * @api-version 1
     * @user
     */
    setProgress(progress: number): void;

    /**
     * Dismisses the snackbar.
     *
     * @api-version 1
     * @user
     */
    dismiss(): void;
}

/**
 * Interface used to handle a snackbar.
 *
 * @api-version 1
 * @user
 */
export module SnackbarInterface {
    /**
     * Information message type.
     *
     * @api-version 1
     * @user
     */
    export const TYPE_INFO = 0;

    /**
     * Warning message type.
     *
     * @api-version 1
     * @user
     */
    export const TYPE_WARN = 1;

    /**
     * Error message type.
     *
     * @api-version 1
     * @user
     */
    export const TYPE_ERROR = 2;

    /**
     * Success message type.
     *
     * @api-version 1
     * @user
     */
    export const TYPE_SUCCESS = 3;
}

/**
 * Interface used to allow the creator of a snackbar to run some code when action button is clicked.
 *
 * @api-version 1
 * @user
 */
export interface OnActionClickListener {
    /**
     * This method will be invoked when an action button in the snackbar is clicked.
     *
     * @param snackbar the snackbar that received the click
     *
     * @api-version 1
     * @user
     */
    onClick(snackbar: SnackbarInterface): void;
}

/**
 * Interface used to allow the creator of a snackbar to run some code when the snackbar is dismissed.
 *
 * @api-version 1
 * @user
 */
export interface OnSnackbarDismissListener {
    /**
     * This method will be invoked when the snackbar is dismissed.
     *
     * @param snackbar the snackbar that received the event.
     *
     * @api-version 1
     * @user
     */
    onDismiss(snackbar: SnackbarInterface): void;
}

/** @inheritDoc ISnackbar */
// @ts-ignore
export const Snackbar = (() => window.Snackbar)() as ISnackbar;
/**
 * A class to display message as Snackbar.
 *
 * @api-version 1
 * @user
 */
export abstract class ISnackbar {
    /**
     * Show a snackbar.
     *
     * @api-version 1
     * @user
     */
    abstract show(builder: ISnackbarBuilder): SnackbarInterface | null;
}

/** @inheritDoc ISnackbar */
// @ts-ignore
export const SnackbarBuilder = (() => window.SnackbarBuilder)() as (new <T extends ISnackbarBuilder>(context: Context) => T);
/**
 * A class to build a snackbar.
 *
 * @api-version 1
 * @user
 */
export interface ISnackbarBuilder {
    /**
     * Set a snackbar type.
     * Available types are:
     * - {@link SnackbarInterface.TYPE_INFO}
     * - {@link SnackbarInterface.TYPE_WARN}
     * - {@link SnackbarInterface.TYPE_ERROR}
     * - {@link SnackbarInterface.TYPE_SUCCESS}
     *
     * @param type A type of snackbar.
     *
     * @api-version 1
     * @user
     */
    setType(type: number): ISnackbarBuilder;

    /**
     * Set a title text
     *
     * @param text A text to display in the title.
     *
     * @api-version 1
     * @user
     */
    setTitle(text: string): ISnackbarBuilder;

    /**
     * Set a message. The message is mandatory, so it couldn't be empty.
     *
     * @param text A text to display in the content.
     *
     * @api-version 1
     * @user
     */
    setMessage(text: string): ISnackbarBuilder;

    /**
     * Set an action button.
     *
     * @param text A text to display in the button.
     * @param enabled True if this view is enabled, false otherwise.
     * @param listener This method will be invoked when an action button in the snackbar is clicked.
     *
     * @api-version 1
     * @user
     */
    setActionButton(text: string, enabled: boolean, listener: OnActionClickListener): ISnackbarBuilder;

    /**
     * Set a progressbar. If this is set, then {@link @mui/material/LinearProgress} will be shown in the snackbar.
     *
     * @param determinate Whether allows to enable the indeterminate mode or determinate.
     * @param progress Default progress value. Value between 0 and 100. It is work on only determinate mode.
     *
     * @api-version 1
     * @user
     */
    setProgress(determinate: boolean, progress: number): ISnackbarBuilder;

    /**
     * Set a close button in the snackbar.
     * The button is shown at top right corner in the snackbar.
     *
     * @param enabled Set whether the close button is enabled or not.
     *
     * @api-version 1
     * @user
     */
    setCloseButton(enabled: boolean): ISnackbarBuilder;

    /**
     * Set whether to persistently display snackbar.
     * The Snackbar by default stays on for 3 seconds and then disappears.
     *
     * @param persistent Set whether to persistently display snackbar.
     *
     * @api-version 1
     * @user
     */
    setPersistent(persistent: boolean): ISnackbarBuilder;

    /**
     * Set whether to prevent duplicated snackbar.
     *
     * @param preventDuplicated Ignores displaying multiple snackbars with the same 'type', 'title' and 'message'.
     *
     * @api-version 1
     * @user
     */
    setPreventDuplicated(preventDuplicated: boolean): ISnackbarBuilder;

    /**
     * Sets a listener to be invoked when the snackbar is dismissed.
     *
     * @param listener The {@link OnSnackbarDismissListener} to use.
     *
     * @api-version 1
     * @user
     */
    setOnDismissListener(listener: OnSnackbarDismissListener): ISnackbarBuilder;
}
// [END] UI /////////////////////////


// [START] Module Package API /////////////////////////
/**
 * A class of set with APIs to interact with manifest.json.
 *
 * @api-version 1
 * @user
 */
export class Manifest {
    /**
     * Dart-SDK Version 1
     *
     * @api-version 1
     * @user
     */
    static readonly SDK_VERSION_1 = "1";

    /**
     * Dart-SDK Version 2
     *
     * @api-version 2
     * @user
     */
    static readonly SDK_VERSION_2 = "2";

    /**
     * Dart-SDK Version 3
     *
     * @api-version 3
     * @user
     */
    static readonly SDK_VERSION_3 = "3";

    /**
     * Types of user module.
     *
     * @enum
     * @api-version 1
     * @user
     */
    static readonly USER_TYPE = {
        /**
         * 'Home' type module.
         * Under current policy, this is system module. And only Doosan Robotics can implement system modules.
         *
         * @api-version 1
         * @user
         */
        HOME: "HOME",

        /**
         * 'Store' type module.
         * Under current policy, this is system module. And only Doosan Robotics can implement system modules.
         *
         * @api-version 1
         * @user
         */
        STORE: "STORE",

        /**
         * 'Recovery' type module.
         * Under current policy, this is system module. And only Doosan Robotics can implement system modules.
         *
         * @api-version 1
         * @user
         */
        RECOVERY: "RECOVERY",

        /**
         * 'Setting' type module.
         * Under current policy, this is system module. And only Doosan Robotics can implement system modules.
         *
         * @api-version 1
         * @user
         */
        SETTING: "SETTING",

        /**
         * 'Process' type module.
         *
         * @api-version 1
         * @user
         */
        PROCESS: "PROCESS",

        /**
         * 'Task Editor' type module.
         *
         * @api-version 1
         * @user
         */
        TASK_EDITOR: "TASK_EDITOR",

        /**
         * 'Device Setting' type module.
         *
         * @api-version 1
         * @user
         */
        DEVICE_SETTING: "DEVICE_SETTING",

        /**
         * 'User Command' type module.
         *
         * @api-version 1
         * @user
         */
        USER_COMMAND: "USER_COMMAND",

        /**
         * 'Jog' type module.
         *
         * @api-version 1
         * @user
         */
        JOG: "JOG",

        /**
         * 'Dashboard' type module.
         *
         * @api-version 1
         * @user
         */
        DASHBOARD: "DASHBOARD",

        /**
         * Custom type module.
         *
         * @api-version 1
         * @user
         */
        ETC: "ETC"
    } as const;

    /**
     * Types of framework module.
     *
     * @enum
     * @api-version 1
     * @user
     */
    static readonly FRAMEWORK_TYPE = {
        /**
         * 'Communication' type module.
         *
         * @api-version 1
         * @user
         */
        COMMUNICATION: "Communication",

        /**
         * 'Control' type module.
         *
         * @api-version 1
         * @user
         */
        CONTROL: "Control",
    } as const;

    /**
     * Sub Types of framework module.
     *
     * @enum
     * @api-version 1
     * @user
     */
    static readonly FRAMEWORK_SUB_TYPE = {
        /**
         * 'TCP' type module in Communication type module.
         *
         * @api-version 1
         * @user
         */
        TCP: "TCP",

        /**
         * 'Serial' module in Communication type module.
         *
         * @api-version 1
         * @user
         */
        SERIAL: "Serial",

        /**
         * 'Modbus' module in Communication type module.
         *
         * @api-version 1
         * @user
         */
        MODBUS: "Modbus",

        /**
         * 'ModbusIO' module in Communication type module.
         *
         * @api-version 1
         * @user
         */
        MODBUS_IO: "ModbusIO",

        /**
         * 'Force/Compliance' module in Control type module.
         *
         * @api-version 1
         * @user
         */
        FORCE_COMPLIANCE : "Force/Compliance",

        /**
         * 'Others' module.
         *
         * @api-version 1
         * @user
         */
        OTHERS: "Others"
    } as const;

    /**
     * Allows using system API.
     * Under current policy, only below type modules can be use this permission
     * - {@link Manifest.USER_TYPE.HOME}
     * - {@link Manifest.USER_TYPE.STORE}
     * - {@link Manifest.USER_TYPE.RECOVERY}
     * - {@link Manifest.USER_TYPE.SETTING}
     *
     * @api-version 1
     * @system
     */
    static readonly PERMISSION_SYSTEM_MODULE: string = "dart.permission.SYSTEM_MODULE";

    /**
     * Allows to show a system dialog.
     *
     * @api-version 1
     * @user
     */
    static readonly PERMISSION_SYSTEM_DIALOG: string = "dart.permission.SYSTEM_DIALOG";
}

/**
 * Parameters for {@link BaseModule.onModulePackageInstalledWith}
 *
 * @api-version 3
 * @user
 */
export type InstallPackageParams = {
    /**
     * Installed package's context.
     * With this context, only call {@link Context.DART_DATABASE} with {@link Context.getSystemLibrary} methods are possible.
     * This context will be destroyed after end {@link BaseModule.onModulePackageInstalledWith}
     *
     * @api-version 3
     * @user
     */
    context: ModuleContext;
    /**
     * Installed package's version.
     *
     * @api-version 3
     * @user
     */
    version: string;
}

/**
 * Parameters for {@link BaseModule.onModulePackageUpdatedWith}
 *
 * @api-version 3
 * @user
 */
export type UpdatePackageParams = {
    /**
     * Updated package's context.
     * With this context, only call {@link Context.DART_DATABASE} with {@link Context.getSystemLibrary} methods are possible.
     * This context will be destroyed after end {@link BaseModule.onModulePackageUpdatedWith}
     *
     * @api-version 3
     * @user
     */
    context: Context;
    /**
     * The package's old version.
     *
     * @api-version 3
     * @user
     */
    oldVersion: string;
    /**
     * The package's new version.
     *
     * @api-version 3
     * @user
     */
    newVersion: string;
}

/**
 * An abstract class to be inherited on main class of the module package.
 * DART-Platform's system retrieve an appropriate module's component about requests a {@link Message} through this class.
 * Therefore, the module package must support one main class that is inherited this abstract class.
 * And the class should be implemented in main script file which is defined at 'main' tag of manifest.json.
 *
 * ```
 * // manifest.json
 * {
 *     ...
 *     "main": "index.bundle.js",
 *     ...
 * }
 *
 * // index.ts(x)
 * class MyModule extends BaseModule {
 *    ...
 * }
 * ```
 *
 * @api-version 1
 * @user
 */
export abstract class BaseModule {
    /**
     * Module package Info
     *
     * @api-version 1
     * @user
     */
    readonly packageInfo: IModulePackageInfo;

    /**
     * A constructor to instantiate {@link BaseModule}.
     *
     * @api-version 1
     * @system
     */
    constructor(packageInfo: IModulePackageInfo) {
        this.packageInfo = packageInfo;
        logger.debug(`[${packageInfo.packageName}] BaseModule is instantiated`);
    }

    /**
     * This method is called to retrieve an appropriate {@link ModuleScreen} component about the {@link Message} by system.
     * The method could be called by only system.
     *
     * @param componentId A component id to retrieve a component.
     * @return An object that is consists of a class which is inherited the {@link ModuleScreen} and CSS file's relative path array that are should be loaded at HTML.
     *
     * @api-version 1
     * @system
     */
    getModuleScreen(componentId: string): typeof ModuleScreen | null {
        return null;
    }

    /**
     * This method is called to retrieve an appropriate {@link ModuleService} component about the {@link Message} by system.
     * The method could be called by only system.
     *
     * @param componentId A component id to retrieve a component.
     * @return A class which is inherited the {@link ModuleService}.
     *
     * @api-version 1
     * @system
     */
    getModuleService(componentId: string): typeof ModuleService | null {
        return null;
    }

    /**
     * This method is called only when the module package is first installed.
     * If there is any jobs which are need to do after install the module package, then this method should be overridden and implement code in the method.
     * The method could be called by only system.
     *
     * @api-version 1
     * @system
     */
    onModulePackageInstalled(): void {
        // empty
    }

    /**
     * This method is called only when the module package is first installed.
     * If there is any jobs which are need to do after install the module package, then this method should be overridden and implement code in the method.
     * The method could be called by only system.
     *
     * @param params {@link InstallPackageParams}.
     *
     * @api-version 3
     * @system
     */
    async onModulePackageInstalledWith(params: InstallPackageParams): Promise<void> {
        // empty
    }

    /**
     * This method is called when the module package is updated.
     * If there is any jobs which are need to do after update the module package, then this method should be overridden and implement code in the method.
     * The method could be called by only system.
     *
     * @param oldVersion A module package version before it was updated.
     * @param newVersion A module package version after it has been updated.
     *
     * @api-version 1
     * @system
     */
    onModulePackageUpdated(oldVersion: string, newVersion: string): void {
        // empty
    }

    /**
     * This method is called when the module package is updated.
     * If there is any jobs which are need to do after update the module package, then this method should be overridden and implement code in the method.
     * The method could be called by only system.
     *
     * @param params {@link UpdatePackageParams}.
     *
     * @api-version 3
     * @system
     */
    async onModulePackageUpdatedWith(params: UpdatePackageParams): Promise<void> {
        // empty
    }

    /**
     * Call this when system is need to render a screen component that is included in the module.
     * It is needed to avoid 'Minified React error #321' problem.
     * The method could be called by only system.
     *
     * @return The ReactDOM class that is imported in the module package.
     *
     * @api-version 1
     * @system
     */
    readonly getReactDom = () => {
        return ReactDOM;
    };
}

/**
 * An interface to interact with a ModuleScreen component.
 *
 * @api-version 1
 * @system
 */
export interface IModuleScreenInterface {
    /**
     * Whether the screen is focused or not.
     *
     * @return Return true if the screen is focused or not.
     *
     * @api-version 1
     * @system
     */
    isScreenFocused(): boolean;

    /**
     * Whether the screen is visible or not.
     * In the case of a PopupScreen, it is not focused, but can be seen.
     *
     * @return Return true if the screen is visible or not.
     *
     * @api-version 1
     * @system
     */
    isScreenVisible(): boolean;

    /**
     * Get screen mode.
     * Available modes are:
     * - {@link PopupScreenMode.SINGLE}
     * - {@link PopupScreenMode.DUAL}
     *
     * @return Return a current screen mode.
     *
     * @api-version 1
     * @system
     */
    getScreenMode(): PopupScreenMode;
}

/**
 * This is the type of props object for the screen component constructor {@link ModuleScreen.constructor}.
 *
 * @api-version 1
 * @user
 */
export type ModuleScreenProps = {
    /**
     * An object that is described about a module component environment.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    moduleContext: ModuleContext,
    /**
     * An object that is requested to execute the component.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    message: Message,
    /**
     * An instance of {@link IModuleMessenger} for communication between components rendered on the same screen.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    messenger: IModuleMessenger,
    /**
     * An callback function. It is called after created ModuleScreen component.
     *
     * @api-version 1
     * @user
     */
    onCreated: any
    /**
     * An interface to interact with screen.
     *
     * @api-version 1
     * @system
     */
    screenInterface: IModuleScreenInterface;
}

/**
 * An abstract class to be inherited on screen component class of the Module package.
 * Screen component is an executable unit on DART-Platform.
 * Conceptually,the components are like React functions.
 * They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 *
 * This component has a lifecycle.
 * For more information on each lifecycle, see [React.Component's lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle).
 *
 * ---
 * ```
 * constructor()
 *      ↓
 * render()
 *      ↓
 * componentDidMount()
 *      ↓
 * shouldComponentUpdate()
 *      ↓
 * componentDidUpdate()
 *      ↓
 * onBind()
 *      ↓
 * onUnbind()
 *      ↓
 * componentWillUnmount()
 * ```
 * ---
 *
 * @typeParam S An type params to describe a React.Component's state object.
 *
 * @api-version 1
 * @user
 */
export abstract class ModuleScreen extends React.Component<ModuleScreenProps, any> {
    /**
     * An object that is described about an environment of the screen component.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    readonly moduleContext: ModuleContext;

    /**
     * An object that is requested to execute the screen component.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    readonly message: Message;

    /**
     * An instance of {@link IModuleMessenger} for communication between components rendered on the same screen.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    readonly messenger: IModuleMessenger;

    /**
     * An interface to interact with screen.
     *
     * @api-version 1
     * @system
     */
    private readonly screenInterface: IModuleScreenInterface;

    /**
     * An object to apply system theme on the screen component.
     *
     * ```typescript
     * import { ThemeProvider } from "@mui/material/styles";
     * ...
     *
     * class MainScreen extends ModuleScreen {
     *
     *     ...
     *
     *     render() {
     *         return(
     *              <ThemeProvider theme={this.systemTheme}>
     *                  ...
     *              </ThemeProvider>
     *         );
     *     }
     * }
     * ```
     * @api-version 1
     * @user
     */
    protected readonly systemTheme: any;

    /**
     * A constructor to instantiate {@link ModuleScreen}.
     *
     * @api-version 1
     * @system
     */
    protected constructor(props: ModuleScreenProps) {
        super(props);
        this.moduleContext = props.moduleContext;
        this.message = props.message;
        this.messenger = props.messenger;
        this.screenInterface = props.screenInterface;
        this.systemTheme = this.moduleContext.systemTheme;

        this.moduleContext.setConfigurations({ i18n: i18next.use(initReactI18next), stringResources }).then();
        props.onCreated(this, undefined, undefined);
        logger.debug(`[${this.moduleContext.packageName}] ModuleScreen (${this.moduleContext.componentId}) is instantiated`);
    }

    /**
     *
     * Called when a client has been bound to this screen component.
     *
     * @param message A {@link Message} that was used to bind to this screen component.
     * @param channel An empty {@link IModuleChannel}. The screen component should be defined events which are proper about the {@link message}.
     * @return Return true if you implemented events on the {@link IModuleChannel} which is sent as parameter. May return false if the screen component doesn't support interface about the {@link message}.
     *
     * @api-version 1
     * @system
     */
    onBind(message: Message, channel: IModuleChannel): boolean;

    /**
     *
     * Called when a client has been bound to this screen component.
     *
     * @param message A {@link Message} that was used to bind to this screen component.
     * @param channel An empty {@link IModuleChannel}. The screen component should be defined events which are proper about the {@link message}.
     * @param context A caller's context.
     * @return Return true if you implemented events on the {@link IModuleChannel} which is sent as parameter. May return false if the screen component doesn't support interface about the {@link message}.
     *
     * @api-version 3
     * @system
     */
    onBind(message: Message, channel: IModuleChannel, context?: Context): boolean {
        return false;
    }

    /**
     * Called when a client has been unbound from this screen component.
     *
     * @param message A {@link Message} the was used to bind to this screen component.
     *
     * @api-version 1
     * @system
     */
    onUnbind(message: Message): void {
        // empty
    }

    /**
     * Called when screen's focus state has been changed.
     *
     * @param focused A focused state.
     *
     * @api-version 1
     * @system
     */
    onScreenFocused(focused: boolean): void {
        // empty
    };

    /**
     * Called when screen's visible state has been changed.
     *
     * @param visible A visible state.
     *
     * @api-version 2
     * @system
     */
    onScreenVisible(visible: boolean): void {
        // empty
    };

    /**
     * Called when screen's screen mode state has been changed.
     *
     * @param screenMode A screen mode. It is either {@link PopupScreenMode.SINGLE} or {@link PopupScreenMode.DUAL}.
     *
     * @api-version 1
     * @system
     */
    onScreenModeChanged(screenMode: PopupScreenMode): void {
        // empty
    }

    /**
     * Called when the screen has been dragged.
     * This event only occurs if the module screen type is {@link ScreenType.POPUP_SCREEN}.
     *
     * @param dragEvent A {@link PopupScreenDragEvent}.
     *
     * @api-version 2
     * @system
     */
    onScreenDragged(dragEvent: PopupScreenDragEvent): void {
        // empty
    }

    /**
     * Whether the screen is focused or not.
     *
     * @return Return true if the screen is focused or not.
     *
     * @api-version 1
     * @user
     */
    readonly isScreenFocused = () => {
        return this.screenInterface.isScreenFocused();
    };

    /**
     * Whether the screen is visible or not.
     * In the case of a PopupScreen, it is not focused, but can be seen.
     *
     * @return Return true if the screen is visible or not.
     *
     * @api-version 1
     * @user
     */
    readonly isScreenVisible = () => {
        return this.screenInterface.isScreenVisible();
    };

    /**
     * Get screen mode.
     * Available modes are:
     * - {@link PopupScreenMode.SINGLE}
     * - {@link PopupScreenMode.DUAL}
     *
     * @return Return a current screen mode.
     *
     * @api-version 1
     * @system
     */
    readonly getScreenMode = () => {
        return this.screenInterface.getScreenMode();
    };

    /**
     * Called when the module's data have been synchronized.
     * When Dart-Platform gets control, it initializes the Dart-Platform's system and modules internal data to the data that is synchronized with the Controller.
     *
     * @api-version 1
     * @system
     */
    onDataSynchronized(): void {
        // empty
    }

    /**
     * Override to handle new message which has been sent by system.
     * Should not be call super method:
     *
     * ```typescript
     * onNewMessage(message: Message) {
     *     // super.onNewMessage(message); <-- do not call super method
     *
     *     // implement here to handle the new message
     * }
     * ```
     * @param message A new message.
     * @return Return true if the message has been handled, otherwise false.
     *
     * @api-version 1
     * @system
     */
    onNewMessage(message: Message): Promise<boolean> {
        return new Promise(resolve => {
            logger.warn(`[${this.moduleContext.packageName}] Received ${JSON.stringify(message)}, but the package did not handled this`);
            resolve(false);
        });
    }
}

/**
 * An abstract class to be inherited on a service component class of the module package.
 * Service component is an executable unit on DART-Platform. The service component is managed by {@link IModuleServiceManager};
 *
 * This component has a lifecycle.
 *
 * ---
 * ```
 * constructor()
 *      ↓
 * onStart()
 *      ↓
 * onBind()
 *      ↓
 * onUnbind()
 *      ↓
 * onStop()
 * ```
 * ---
 *
 * @api-version 1
 * @user
 */
export abstract class ModuleService {
    /**
     * An object that is described about an environment of the service component.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    readonly moduleContext: ModuleContext;

    /**
     * A constructor to instantiate {@link ModuleService}.
     *
     * @api-version 1
     * @system
     */
    protected constructor(context: ModuleContext) {
        this.moduleContext = context;
        this.moduleContext.setConfigurations({ i18n: i18next.use(initReactI18next), stringResources }).then();
        logger.debug(`[${context.packageInfo.packageName}] ModuleService (${context.componentInfo.id}) is instantiated`);
    }

    /**
     * Called when the service component is started.
     *
     * @api-version 1
     * @system
     */
    onStart(): void {
        // empty
    }

    /**
     * Called when a client has been bound to this service component.
     *
     * @param message A {@link Message} that was used to bind to this service component.
     * @param channel An empty {@link IModuleChannel}. It should be defined events which are proper about the {@link message}.
     * @return Return true if you implemented events on the {@link IModuleChannel} which is sent as parameter. May return false if the service component doesn't support interface about the {@link message}.
     *
     * @api-version 1
     * @system
     */
    onBind(message: Message, channel: IModuleChannel): boolean;

    /**
     * Called when a client has been bound to this service component.
     *
     * @param message A {@link Message} that was used to bind to this service component.
     * @param channel An empty {@link IModuleChannel}. It should be defined events which are proper about the {@link message}.
     * @param context A caller's context.
     * @return Return true if you implemented events on the {@link IModuleChannel} which is sent as parameter. May return false if the service component doesn't support interface about the {@link message}.
     *
     * @api-version 3
     * @system
     */
    onBind(message: Message, channel: IModuleChannel, context?: Context): boolean {
        return false;
    }

    /**
     * Called when a client has been unbound from this service component.
     *
     * @param message A {@link Message} the was used to bind to this service component.
     *
     * @api-version 1
     * @system
     */
    onUnbind(message: Message): void {
        // empty
    }

    /**
     * Called when the module's data have been synchronized.
     * When Dart-Platform gets control, it initializes the Dart-Platform's system and modules internal data to the data that is synchronized with the Controller.
     *
     * @api-version 1
     * @system
     */
    onDataSynchronized(): void {
        // empty
    }

    /**
     * Called when the service component is stopped.
     *
     * @api-version 1
     * @system
     */
    onStop(): void {
        // empty
    }
}

/**
 * This is the type of props object for the Business UI Component's constructor {@link UserComponent.constructor}.
 *
 * @api-version 1
 * @user
 */
export interface UserComponentProps <U> {
    /**
     * An object that is described about a module component environment which is contains the User Component.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    moduleContext: ModuleContext;

    /**
     * An MutableRefObject to reference the User Component.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    ref?: RefObject<U>;
}

/**
 * An abstract class to be inherited on User Component.
 *
 * @typeParam S An type params to describe a React.Component's state object.
 *
 * @api-version 1
 * @user
 */
export abstract class UserComponent<T extends UserComponentProps<U>, U> extends React.Component<any, any> {
    /**
     * The unique name of the User Component. Comes from 'packageName' of the manifest.json.
     * It is used as unique key to distinguish each User Component package in DART-Store and DART-IDE.
     * If DART-Store has already an uploaded content as same package name, then you cannot upload your User Component package.
     *
     * @api-version 1
     * @user
     */
    readonly packageName: string;

    /**
     * An object that is described about a module component environment.
     * It is initialized in constructor through props.
     *
     * @api-version 1
     * @user
     */
    readonly moduleContext: ModuleContext;

    /**
     * An object to apply system theme on the component.
     *
     * ```typescript
     * import { ThemeProvider } from "@mui/material/styles";
     * ...
     *
     * class MainScreen extends ModuleScreen {
     *
     *     ...
     *
     *     render() {
     *         return(
     *              <ThemeProvider theme={this.systemTheme}>
     *                  ...
     *              </ThemeProvider>
     *         );
     *     }
     * }
     * ```
     * @api-version 1
     * @user
     */
    protected readonly systemTheme: any;

    /**
     * A constructor to instantiate {@link UserComponent}.
     *
     * @api-version 1
     * @system
     */
    protected constructor(props: T) {
        super(props);
        this.packageName = packageName;
        this.moduleContext = props.moduleContext;
        this.systemTheme = this.moduleContext.systemTheme;
        this.moduleContext.initializeUserComponent(this, i18next.use(initReactI18next), stringResources)
            .catch(e => logger.warn(`[${this.packageName}] Failed to initialize ${this.moduleContext.packageName} (User Component) caused by ${e}`));
    }
}
// [END] Module Package API /////////////////////////


// [START] Module Control System API /////////////////////////
/**
 * Module package states.
 *
 * @enum
 * @api-verison 1
 * @user
 */
export const ModulePackageState = {
    /**
     * Module package is not installed. This is initial state value.
     *
     * @api-version 1
     * @user
     */
    NOT_INSTALLED: 0,

    /**
     * Module package has been installed.
     *
     * @api-version 1
     * @user
     */
    INSTALLED: 1,

    /**
     * Module package is updating currently.
     *
     * @api-version 1
     * @user
     */
    UPDATING: 2,

    /**
     * Module package is uninstalling currently.
     *
     * @api-version 1
     * @user
     */
    UNINSTALLING: 3,

    /**
     * Module package is not broken. This is initial state value.
     *
     * @api-version 1
     * @user
     */
    BROKEN: 4
} as const;
/**
 * @ignore
 */
export type ModulePackageState = typeof ModulePackageState[keyof typeof ModulePackageState];

/**
 * Error codes for the module package installation, updating and uninstallation.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ModulePackageInstallErrorCode = {
    /**
     * Success to operation
     *
     * @api-version 1
     * @user
     */
    NO_ERROR: 0x0000_0000,

    /**
     * Canceled by user.
     *
     * @api-version 1
     * @user
     */
    CANCELED_BY_USER: 0x0000_0001,

    // [START] COMMON ERRORS /////////////////////////
    /**
     * An unknown error.
     *
     * @api-version 1
     * @user
     */
    ERROR_UNKNOWN: 0x0001_0001,

    /**
     * Failed to change state of module package because DRL program is running.
     *
     * @api-version 1
     * @user
     */
    ERROR_RUNNING_DRL_PROGRAM: 0x0001_0002,

    /**
     * Not enough space in device to install/update the package.
     *
     * @api-version 1
     * @user
     */
    ERROR_NOT_ENOUGH_SPACE: 0x0001_0003,

    /**
     * Failed to parse script files.
     *
     * @api-version 1
     * @user
     */
    ERROR_FAILED_TO_PARSE: 0x0001_0004,

    /**
     * The manifest.json of the module package is not valid.
     *
     * @api-version 1
     * @user
     */
    ERROR_INVALID_MANIFEST: 0x0001_0005,

    /**
     * The module package is not trusted.
     *
     * @api-version 1
     * @user
     */
    ERROR_NOT_TRUSTED: 0x0001_0006,

    /**
     * Failed to stop the module package to update because it is running DRL Program or other reasons.
     *
     * @api-version 1
     * @user
     */
    ERROR_FAILED_TO_STOP: 0x0001_0007,

    /**
     * The requested module package is not installed.
     *
     * @api-version 1
     * @user
     */
    ERROR_NOT_INSTALLED: 0x0001_0008,

    /**
     * The module package is not allowed to install on the Controller.
     *
     * @api-version 1
     * @user
     */
    ERROR_NOT_ALLOWED_CONTROLLER: 0x0001_0009,

    /**
     * The module package is not allowed to install on the Controller.
     *
     * @api-version 1
     * @user
     */
    ERROR_NOT_COMPATIBLE_SDK_VERSION: 0x0001_000a,

    /**
     * Failed to change state of module package because the Dart-Platform does not have a control authority.
     *
     * @api-version 2
     * @user
     */
    ERROR_NO_CONTROL_AUTHORITY: 0x0001_000b,

    /**
     * An error occurred on a framework module package.
     *
     * @api-version 1
     * @user
     */
    ERROR_ON_FRAMEWORK_MODULE: 0x0001_0010,

    /**
     * Failed to change state of module package because it is measuring state.
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_MEASURING: 0x0001_0020,

    /**
     * Failed to change state of module package because it is recovery state.
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_RECOVERY: 0x0001_0021,

    /**
     * Failed to change state of module package because it is backdrive state.
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_BACKDRIVE: 0x0001_0022,

    /**
     * Failed to change state of module package because it is handguiding state.
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_HANDGUIDE: 0x0001_0023,

    /**
     * Failed to change state of module package because it is under remote control.
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_REMOTE_CONTROL_MODE: 0x0001_0024,

    /**
     * Failed to change state of module package because data is being exported
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_EXPORTING_DATA: 0x0001_0025,

    /**
     * Failed to change state of module package because data is being imported
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_IMPORTING_DATA: 0x0001_0026,

    /**
     * Failed to change state of module package because update is in progress.
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_UPDATE: 0x0001_0027,

    /**
     * Failed to change state of module package because restore is in progress.
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_RESTORE: 0x0001_0028,

    /**
     * Failed to change state of module package because factory reset is in progress.
     *
     * @api-version 2
     * @user
     */
    ERROR_DURING_FACTORY_RESET: 0x0001_0029,

    /**
     * Failed to change state of module package because it is under safety stop.
     *
     * @api-version 2
     * @user
     */
     ERROR_DURING_SAFETY_STOP: 0x0001_002a,

     /**
      * Failed to change state of module package because it is under emergency stop.
      *
      * @api-version 2
      * @user
      */
     ERROR_DURING_EMERGENCY_STOP: 0x0001_002b,
    // [END] COMMON ERRORS /////////////////////////


    // [START] INSTALL ERRORS /////////////////////////
    /**
     * A module package which has same package name has been already installed.
     *
     * @api-version 1
     * @user
     */
    ERROR_ALREADY_INSTALLED: 0x0010_0001,
    // [END] INSTALL ERRORS /////////////////////////


    // [START] UPDATE ERRORS /////////////////////////
    /**
     * Failed to update the module package because the target module package's version is lower or same with the previous package.
     *
     * @api-version 1
     * @user
     */
    ERROR_INVALID_VERSION: 0x0100_0001,

    /**
     * Failed to update the module package because buyer account has been changed.
     *
     * @api-version 2
     * @user
     */
    ERROR_BUYER_ACCOUNT_CHANGED: 0x0100_0002,
    // [END] UPDATE ERRORS /////////////////////////


    // [START] UNINSTALL ERRORS /////////////////////////
    /**
     * Failed to clear data of the module which is requested to uninstall.
     *
     * @api-version 1
     * @user
     */
    ERROR_FAILED_TO_CLEAR_DATA: 0x1000_0001
    // [END] UNINSTALL ERRORS /////////////////////////
} as const;
/**
 * @ignore
 */
export type ModulePackageInstallErrorCode = typeof ModulePackageInstallErrorCode[keyof typeof ModulePackageInstallErrorCode];

/**
 * Enumeration type constant that refers to types of view in which {@link ModuleScreen} is rendered.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const ScreenType = {
    /**
     * Tab screen.
     *
     * @api-version 1
     * @user
     */
    TAB: 1,
    /**
     * Full screen.
     *
     * @api-version 1
     * @user
     */
    FULL_SCREEN: 2,
    /**
     * Popup screen.
     *
     * @api-version 1
     * @user
     */
    POPUP_SCREEN: 3
} as const;
/**
 * @ignore
 */
export type ScreenType = typeof ScreenType[keyof typeof ScreenType];

/**
 * Enumeration type constant that refers to types of popup screen's mode.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const PopupScreenMode = {
    /**
     * Single screen mode.
     *
     * @api-version 1
     * @system
     */
    SINGLE: "single",
    /**
     * Dual screen mode.
     *
     * @api-version 1
     * @system
     */
    DUAL: "dual",
    /**
     * Single screen mode only.
     *
     * @api-version 1
     * @system
     */
    SINGLE_ONLY: "singleOnly",
    /**
     * Dual screen mode only.
     *
     * @api-version 1
     * @system
     */
    DUAL_ONLY: "dualOnly"
} as const;
/**
 * @ignore
 */
export type PopupScreenMode = typeof PopupScreenMode[keyof typeof PopupScreenMode];

/**
 * Metadata for a popup screen component.
 * Popup screen provides a feature of switching between single screen and dual screen.
 *
 * @api-version 1
 * @system
 */
export type PopupScreenData = {
    size?: {
        /**
         * Default single or dual screen size. It is used to set a popup screen size when the popup screen is rendered.
         * - minimum: 300px x 300px
         * - maximum: 1264px x 706px
         * Comes from 'screens - data - size - default' of the manifest.json.
         *
         * @api-version 1
         * @system
         */
        default?: {
            /**
             * Default width size.
             * Comes from 'screens - data - size - default - width' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            width: number,
            /**
             * Default height size.
             * Comes from 'screens - data - size - default - height' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            height: number
        },
        /**
         * Single screen's minimum and maximum size.
         * - minimum: 300px x 300px
         * - maximum: 1264px x 706px
         * Comes from 'screens - data - size - single' of the manifest.json.
         *
         * @api-version 1
         * @system
         */
        single?: {
            /**
             * Single screen's minimum width size. It cannot be smaller than 300px
             * Comes from 'screens - data - size - single - minWidth' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            minWidth?: number,
            /**
             * Single screen's minimum height size. It cannot be smaller than 300px
             * Comes from 'screens - data - size - single - minHeight' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            minHeight?: number,
            /**
             * Single screen's maximum width size. It cannot be larger than 1264px.
             * Comes from 'screens - data - size - single - maxWidth' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            maxWidth?: number,
            /**
             * Single screen's maximum height size. It cannot be larger than 706px.
             * Comes from 'screens - data - size - single - maxHeight' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            maxHeight?: number
        },
        dual?: {
            /**
             * Dual screen's minimum width size. It cannot be smaller than 600px.
             * The minimum width of a dual screen must be twice as large as the width of {@link PopupScreenData.size.single.minWidth}.
             * Comes from 'screens - data - size - dual - minWidth' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            minWidth?: number,
            /**
             * Dual screen's minimum height size. It cannot be smaller than 300px.
             * Comes from 'screens - data - size - dual - minHeight' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            minHeight?: number,
            /**
             * Dual screen's maximum width size. It cannot be larger than 1264px.
             * Comes from 'screens - data - size - dual - maxWidth' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            maxWidth?: number,
            /**
             * Dual screen's maximum height size. It cannot be larger than 706px.
             * Comes from 'screens - data - size - dual - maxHeight' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            maxHeight?: number,
            /**
             * Left screen's minimum width in dual screen mode.
             * The sum of the minimum widths of the left and right screens must be less than {@link PopupScreenData.size.dual.maxWidth}.
             * Comes from 'screens - data - size - dual - leftMinWidth' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            leftMinWidth?: number,
            /**
             * Right screen's minimum width in dual screen mode.
             * The sum of the minimum widths of the left and right screens must be less than {@link PopupScreenData.size.dual.maxWidth}.
             * Comes from 'screens - data - size - dual - rightMinWidth' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            rightMinWidth?: number
        }
    }
    /**
     * The [x, y] position at which the popup screen will be displayed.
     * Default value is center.
     * Comes from 'screens - data - defaultPosition' of the manifest.json.
     *
     * @api-version 1
     * @system
     */
    defaultPosition?: {
        /**
         * The x position at which the popup screen will be displayed.
         * Default value is center.
         * Comes from 'screens - data - defaultPosition - x' of the manifest.json.
         *
         * @api-version 1
         * @system
         */
        x: number,
        /**
         * The y position at which the popup screen will be displayed.
         * Default value is center.
         * Comes from 'screens - data - defaultPosition - y' of the manifest.json.
         *
         * @api-version 1
         * @system
         */
        y: number
    }
    /**
     * Set a default screen mode.
     * Default value is {@link PopupScreenMode.SINGLE}.
     * Available types are:
     * - {@link PopupScreenMode.SINGLE}: start as 'single' mode. user can change to 'dual' mode.
     * - {@link PopupScreenMode.DUAL}: start as 'dual' mode. user can change to 'single' mode.
     * - {@link PopupScreenMode.SINGLE_ONLY}: start as 'single' mode and not support 'dual' mode.
     * - {@link PopupScreenMode.DUAL_ONLY}: start as 'dual' mode and not support 'single' mode.
     *
     * Comes from 'screens - data - defaultScreenMode' of the manifest.json.
     *
     * @api-version 1
     * @system
     */
    defaultScreenMode?: PopupScreenMode,
    /**
     * Whether to pop up to the previous size (width, height) when the popup screen is executed again.
     * Default value is false.
     * Comes from 'screens - data - keepLastSize' of the manifest.json.
     *
     * @api-version 1
     * @system
     */
    keepLastSize?: boolean,
    /**
     * Whether to pop up to the previous position (x, y) when the popup screen is executed again.
     * Default value is false.
     * Comes from 'screens - data - keepLastPosition' of the manifest.json.
     *
     * @api-version 1
     * @system
     */
    keepLastPosition?: boolean,
    /**
     * Whether to pop up to the previous screen mode ({@link PopupScreenMode}) when the popup screen is executed again.
     * Default value is false.
     * Comes from 'screens - data - keepLastScreenMode' of the manifest.json.
     *
     * @api-version 1
     * @system
     */
    keepLastScreenMode?: boolean,
    /**
     * Whether to use separator bar on dual screen. If it is set, then user can adjust width of dual screen with the separator bar.
     * Default value is false.
     * Comes from 'screens - data - useSeparatorBar' of the manifest.json.
     *
     * @api-version 1
     * @system
     */
    useSeparatorBar?: boolean,
    /**
     * Whether to set the separator bar to previous ratio.
     * Default value is false.
     * Comes from 'screens - data - keepLastSeparatorBarRatio' of the manifest.json.
     *
     * @api-version 1
     * @system
     */
    keepLastSeparatorBarRatio?: boolean,
    /**
     * Sub popup screen components information for single screen. If you define sub screens in here, then user can select a single screen in single screen.
     * Comes from 'screens - data - subScreens' of the manifest.json.
     *
     * @api-version 1
     * @system
     */
    subScreens?: {
        /**
         * A component name.
         * Comes from 'screens - data - subScreens - name' of the manifest.json.
         *
         * @api-version 1
         * @system
         */
        name: string,
        /**
         * A component id to distinguish components which are implemented in the module package.
         * Comes from 'screens - data - subScreens - id' of the manifest.json.
         *
         * @api-version 1
         * @system
         */
        id: string
    }[],
    /**
     * Information of Popup screen components for dual screen. It is used to initialize dual screen's left and right screen.
     * Comes from 'screens - data - dualScreen' of the manifest.json.
     *
     * @api-version 1
     * @system
     */
    dualScreen?: {
        /**
         * A title of dual screen.
         * Comes from 'screens - data - dualScreen - name' of the manifest.json.
         *
         * @api-version 1
         * @system
         */
        name: string,
        /**
         * Left screen component information of dual screen.
         * Comes from 'screens - data - dualScreen - leftScreen' of the manifest.json.
         *
         * @api-version 1
         * @system
         */
        leftScreen: {
            /**
             * A component id to distinguish components which are implemented in the module package.
             * Comes from 'screens - data - dualScreen - leftScreen - id' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            id: string,
        },
        /**
         * Right screen component information of dual screen.
         * Comes from 'screens - data - dualScreen - rightScreen' of the manifest.json.
         *
         * @api-version 1
         * @system
         */
        rightScreen: {
            /**
             * A component id to distinguish components which are implemented in the module package.
             * Comes from 'screens - data - dualScreen - rightScreen - id' of the manifest.json.
             *
             * @api-version 1
             * @system
             */
            id: string,
        }
    }
}

/**
 * The interface represents events that occur due to the user interacting with a popup screen component.
 *
 * @api-version 2
 * @user
 */
export type PopupScreenDragEvent = {
    /**
     * The event's screen top coordinate.
     *
     * @api-version 2
     * @user
     */
    readonly top: number;
    /**
     * The event's screen left coordinate.
     *
     * @api-version 2
     * @user
     */
    readonly left: number;
}

/**
 * Overall information about the contents of a module package.
 * This corresponds to all the information collected from manifest.json.
 *
 * @api-version 1
 * @user
 */
export interface IModulePackageInfo {
    /**
     * The name of the module. Comes from 'name' of the manifest.json.
     * It is used to display name on DART-Platform's Home or DART-Store.
     *
     * @api-version 1
     * @user
     */
    readonly name: string;

    /**
     * The unique name of the module package. Comes from 'packageName' of the manifest.json.
     * It is used as unique key to distinguish each module package in DART-Store and DART-Platform.
     * If DART-Store has already an uploaded content as same package name, then you cannot upload your module package.
     *
     * @api-version 1
     * @user
     */
    readonly packageName: string;

    /**
     * The version of the module package. Comes from 'version' of the manifest.json.
     * It is used to determine whether one version is more recent than another, with higher numbers indicating more recent versions.
     *
     * It has a naming rule below as:
     *  - It must have three segments (one or more dots).
     *  - Each segment must be consists with only numeric [0-9].
     *  - We recommend that you follow the [Semantic Versioning](https://semver.org/)({major}. {Minor}. {Patch}).
     *  - (e.g. 1.10.13)
     *
     * @api-version 1
     * @user
     */
    readonly version: string;

    /**
     * An integer designating the DART-API version that the module package targets. Comes from 'skdVersion' of the manifest.json.
     *
     * @api-version 1
     * @user
     */
    readonly sdkVersion: string;

    /**
     * An icon file path that represented the module package.
     * It must be set as a reference to image resource like as: 'assets/images/icon.png"
     *
     * @api-version 1
     * @user
     */
    readonly icon: string;

    /**
     * A path of user module package file (.dm)
     *
     * @api-version 1
     * @user
     */
    readonly drscModulePackageFile: string | null;

    /**
     * A path of framework module package file (.dm)
     *
     * @api-version 1
     * @user
     */
    readonly drcfModulePackageFile: string | null;

    /**
     * An array of compatible Robot's model names.
     *
     * @api-version 1
     * @user
     */
    readonly compatibleRobotModels: string[];

    /**
     * Whether the module has been certificated through Dart-Store.
     *
     * @api-version 1
     * @user
     */
    readonly certificated: boolean;

    /**
     * An array of Controller's serial ID which are allowed to install.
     *
     * @api-version 1
     * @user
     */
    readonly allowedControllers: string[];

    /**
     * Whether paid module package or not.
     *
     * @api-version 1
     * @user
     */
    readonly paid: boolean;

    /**
     * A developer name.
     *
     * @api-version 1
     * @user
     */
    readonly developer: string;

    /**
     * A main script file path that is contains a main class which is inherited {@link BaseModule}.
     * The script file will be loaded by system on HTML to get a main class of the module.
     *
     * @api-version 1
     * @user
     */
    readonly main: string;

    /**
     * A permissions array that are needed to run this module package.
     * Comes from 'usesPermissions' of the manifest.json.
     *
     * @api-version 1
     * @user
     */
    readonly usesPermissions: string[];

    /**
     * A supported language code array that are supported language on this module package.
     * Comes from 'supportedLanguages' of the manifest.json.
     *
     * @api-version 1
     * @user
     */
    readonly supportedLanguages: string[];

    /**
     * An array of package name which are needed package to run this.
     * Comes from 'requiredPackageNames' of the manifest.json.
     *
     * @api-version 1
     * @user
     */
    readonly requiredPackageNames: string[];

    /**
     * The type of the module package. Comes from 'type' of the manifest.json.
     * Available types are:
     * - {@link Manifest.USER_TYPE.HOME}
     * - {@link Manifest.USER_TYPE.STORE}
     * - {@link Manifest.USER_TYPE.RECOVERY}
     * - {@link Manifest.USER_TYPE.SETTING}
     * - {@link Manifest.USER_TYPE.PROCESS}
     * - {@link Manifest.USER_TYPE.TASK_EDITOR}
     * - {@link Manifest.USER_TYPE.DEVICE_SETTING}
     * - {@link Manifest.USER_TYPE.USER_COMMAND}
     * - {@link Manifest.USER_TYPE.JOG}
     * - {@link Manifest.USER_TYPE.DASHBOARD}
     * - {@link Manifest.USER_TYPE.ETC}
     *
     * @api-version 1
     * @user
     */
    readonly type: string;

    /**
     * An array of screen component info ({@link IModuleScreenInfo}).
     * Comes from 'screens' of the manifest.json.
     *
     * @api-version 1
     * @user
     */
    readonly screens: IModuleScreenInfo[];

    /**
     * An array of service component info ({@link IModuleServiceInfo}).
     * Comes from 'services' of the manifest.json.
     *
     * @api-version 1
     * @user
     */
    readonly services: IModuleServiceInfo[];

    /**
     * An array of database component info ({@link IModuleDatabaseInfo}).
     * Comes from 'databases' of the manifest.json.
     *
     * @api-version 1
     * @user
     */
    readonly databases: IModuleDatabaseInfo[];

    /**
     * An array of framework module info ({@link IFrameworkModuleInfo}).
     * Comes from manifest.json of framework module.
     *
     * @api-version 1
     * @user
     */
    readonly frameworkModules: IFrameworkModuleInfo[];

    /**
     * Whether the paid module package is activated or not.
     *
     * @api-version 1
     * @user
     */
    readonly activated: boolean;

    /**
     * Whether the module package has system permission or not.
     *
     * @api-version 1
     * @user
     */
    readonly isSystemPackage: boolean;

    /**
     * Whether the module package is essential package or not.
     * If it is essential package then the module cannot delete from Dart-Platform.
     *
     * @api-version 1
     * @user
     */
    readonly isEssentialPackage: boolean;

    /**
     * A directory path where is installed the module package.
     *
     * @api-version 1
     * @user
     */
    readonly packageDirPath: string;

    /**
     * Size of package in bytes.
     *
     * @api-version 1
     * @user
     */
    readonly packageSize: number;

    /**
     * The package installed date.
     *
     * @api-version 1
     * @user
     */
    readonly installedDate: number;

    /**
     * The package updated date.
     *
     * @api-version 1
     * @user
     */
    readonly updatedDate: number;

    /**
     * Current module package state.
     * Available states are:
     * - {@link ModulePackageState.NOT_INSTALLED}
     * - {@link ModulePackageState.INSTALLED}
     * - {@link ModulePackageState.UPDATING}
     * - {@link ModulePackageState.UNINSTALLING}
     * - {@link ModulePackageState.BROKEN}
     *
     * @api-version 1
     * @user
     */
    packageState: number;

    /**
     * Retrieve a {@link IModuleScreenInfo} object that matched with component id.
     *
     * @param componentId The component id of the desired module package.
     * @return The {@link IModuleScreenInfo} object about the component id, or null if there are none.
     *
     * @api-version 1
     * @user
     */
    getScreenInfo(componentId: string): IModuleScreenInfo | null;

    /**
     * Retrieve a {@link IModuleServiceInfo} object that matched with component id.
     *
     * @param componentId The component id of the desired module package.
     * @return The {@link IModuleServiceInfo} object about the component id, or null if there are none.
     *
     * @api-version 1
     * @user
     */
    getServiceInfo(componentId: string): IModuleServiceInfo | null;

    /**
     * Whether the module package has a permission.
     *
     * @param permission The permission name to check.
     * @return Return true if the module package has the permission.
     *
     * @api-version 1
     * @user
     */
    hasPermission(permission: string): boolean;

    /**
     * An account information of the paid module's buyer.
     *
     * @param context A context to check a permission.
     * @return An account information or null.
     *
     * @api-version 1
     * @system
     */
    getBuyerAccount(context: Context): string | null;

    /**
     * Compare versions and the desired version for order.
     *
     * @param version A version to be compared.
     * @return A negative integer, zero, or a positive integer as this version is less than, equal to, or greater than the argument.
     *
     * @api-version 1
     * @user
     */
    compareVersion(version: string): number;

    /**
     * Get a display name about {@link type}.
     *
     * @return A display name about user module type if package has a user module, otherwise null.
     *
     * @api-version 1
     * @user
     */
    getUserModuleTypeName(): string | null;

    /**
     * Get display names about {@link IFrameworkModuleInfo.type}.
     *
     * @return An array of display name about framework module types if package has framework modules, otherwise null.
     *
     * @api-version 1
     * @user
     */
    getFrameworkModuleTypeNames(): string[] | null;

    /**
     * Get display names about {@link IFrameworkModuleInfo.subType}.
     *
     * @return An array of display name about framework module sub types if package has framework modules, otherwise null.
     *
     * @api-version 1
     * @user
     */
    getFrameworkModuleSubTypeNames(): string[] | null;

    /**
     * Return information as formatted string about this module package.
     *
     * @api-version 1
     * @user
     */
    dump(): string;
}

/**
 * Base type containing information common to all module components ({@link IModuleScreenInfo}, {@link IModuleServiceInfo}).
 *
 * @api-version 1
 * @user
 */
export interface IModuleComponentInfo {
    /**
     * A component type.
     * Available names are:
     * - typeof {@link ModuleScreen}
     * - typeof {@link ModuleService}
     *
     * @api-version 1
     * @user
     */
    type: string;

    /**
     * A component name.
     *
     * @api-version 1
     * @user
     */
    name: string;

    /**
     * A component id to distinguish components which are implemented in the module package.
     *
     * @api-version 1
     * @user
     */
    id: string;

    /**
     * A list of messageFilter to retrieve an appropriate component about a {@link Message}.
     *
     * @api-version 1
     * @user
     */
    messageFilters: MessageFilter[];
}

/**
 * Information you can retrieve about a particular module screen.
 * This corresponds to information collected from the manifest.json's 'screens'.
 *
 * @api-version 1
 * @user
 */
export interface IModuleScreenInfo extends IModuleComponentInfo {
    /**
     * An icon file path that represented the screen component.
     * It must be set as a reference to image resource like as: 'assets/images/icon.png"
     *
     * @api-version 2
     * @user
     */
    icon: string;
}

/**
 * Information you can retrieve about a particular module service.
 * This corresponds to information collected from the manifest.json's 'services'.
 *
 * @api-version 1
 * @user
 */
export interface IModuleServiceInfo extends IModuleComponentInfo {

}

/**
 * Information you can retrieve about a particular module service.
 * This corresponds to information collected from the manifest.json's 'services'.
 *
 * @api-version 1
 * @user
 */
export interface IModuleDatabaseInfo extends IModuleComponentInfo {
    createDatabaseReader(context: Context): IDartDatabaseReader;
}

/**
 * Information you can retrieve about a particular framework module.
 * This corresponds to information collected from the framework module's manifest.json.
 *
 * @api-version 1
 * @user
 */
export type IFrameworkModuleInfo = {
    /**
     * The name of the framework module. Comes from 'ModuleName' of the manifest.json.
     *
     * @api-version 1
     * @user
     */
    name: string,
    /**
     * The type of the framework module. Comes from 'ModuleCategory' of the manifest.json.
     * - {@link Manifest.FRAMEWORK_TYPE.COMMUNICATION}
     * - {@link Manifest.FRAMEWORK_TYPE.CONTROL}
     *
     * @api-version 1
     * @user
     */
    type: string,
    /**
     * The subtype of the framework module. Comes from 'ModuleSubCategory' of the manifest.json.
     * - {@link Manifest.FRAMEWORK_SUB_TYPE.TCP}
     * - {@link Manifest.FRAMEWORK_SUB_TYPE.SERIAL}
     * - {@link Manifest.FRAMEWORK_SUB_TYPE.MODBUS}
     * - {@link Manifest.FRAMEWORK_SUB_TYPE.MODBUS_IO}
     * - {@link Manifest.FRAMEWORK_SUB_TYPE.FORCE_COMPLIANCE}
     * - {@link Manifest.FRAMEWORK_SUB_TYPE.OTHERS}
     *
     * @api-version 1
     * @user
     */
    subType: string
}

/**
 * Information that is returned from resolving a message against a MessageFilter.
 *
 * @api-version 1
 * @user
 */
export interface IModuleResolveInfo {
    /**
     * The {@link IModulePackageInfo} object which is owner of the {@link screenInfo} or the {@link serviceInfo}.
     *
     * @api-version 1
     * @user
     */
    readonly packageInfo: IModulePackageInfo;

    /**
     * The component info that corresponds to this resolution match.
     *
     * @api-version 1
     * @user
     */
    readonly screenInfo: IModuleScreenInfo | null;

    /**
     * The component info that corresponds to this resolution match.
     *
     * @api-version 1
     * @user
     */
    readonly serviceInfo: IModuleServiceInfo | null;

    /**
     * The component info that corresponds to this resolution match.
     *
     * @api-version 1
     * @user
     */
    readonly databaseInfo: IModuleDatabaseInfo | null;
}

/**
 * An interface to callback states of bound with component.
 *
 * @api-version 1
 * @user
 */
export interface IModuleComponentBinder {
    /**
     * Called when it has been bound to the component.
     * Between components could communicate through the {@link IModuleChannel}.
     *
     * @param packageName A package name of bound component.
     * @param componentId A id of bound component.
     * @param channel An empty {@link IModuleChannel}. It should be defined events to communicate with the bound component.
     *
     * @api-version 1
     * @user
     */
    onBound(packageName: string, componentId: string, channel: IModuleChannel): void;

    /**
     * Called when it unbound from the component.
     *
     * @param packageName A package name of unbound component.
     * @param componentId A id of unbound component.
     *
     * @api-version 1
     * @user
     */
    onUnbound(packageName: string, componentId: string): void;
}

/**
 * An interface to communicate with another component.
 *
 * @api-version 1
 * @user
 */
export interface IModuleChannel {
    /**
     * Send an event to another-side channel by the string name.
     *
     * @param eventName An event name.
     * @param args Any parameters which are sent.
     *
     * @api-version 1
     * @user
     */
    send(eventName: string, ...args: any): void;

    /**
     * Register a listener to receive the given event which is sent from another-side channel.
     *
     * @param eventName An event name.
     * @param listener A listener to receive the given event.
     *
     * @api-version 1
     * @user
     */
    receive(eventName: string, listener: (...args: any) => void): void;

    /**
     * Tells whether the given events are currently registered on another-side channel or not.
     *
     * @param eventNames Event names to search.
     * @return Return true if the given events are registered all on another-side channel, otherwise false.
     *
     * @api-version 1
     * @user
     */
    containsOnAnotherSide(eventNames: string[]): boolean;

    /**
     * Remove a listener matched with the event name.
     *
     * @param eventName An event name to search.
     * @param listener A listener to remove.
     *
     * @api-version 1
     * @user
     */
    remove(eventName: string, listener: (...args: any) => void): void;

    /**
     * Remove all listeners matched with the event name.
     *
     * @param eventName An event name to remove.
     *
     * @api-version 1
     * @user
     */
    removeAll(eventName: string): void;
}

/**
 * An interface to communicate with another component.
 *
 * @api-version 1
 * @user
 */
export interface IModuleMessenger {
    /**
     * Send an event to subscriber.
     *
     * @param context A caller's context.
     * @param event An event.
     * @param data A data set of key and value pair.
     *
     * @api-version 1
     * @user
     */
    send(context: Context, event: string, data: Record<string, any>): void;

    /**
     * Register an event to be subscribed.
     *
     * @param context A caller's context.
     * @param event An event.
     * @param listener A listener to receive data of the given event.
     *
     * @api-version 1
     * @user
     */
    receive(context: Context, event: string, listener: (data: Record<string, any>) => void): void;

    /**
     * Remove a listener matched with the event.
     *
     * @param context A caller's context.
     * @param event An event to search.
     * @param listener A listener to be removed.
     *
     * @api-version 1
     * @user
     */
    remove(context: Context, event: string, listener: (data: Record<string, any>) => void): void;

    /**
     * Remove all listeners matched with the event.
     * If the event is not set, then call listeners which are registered by the context will be removed.
     *
     * @param context A caller's context.
     * @param event An event to be removed. If it is not set, then all listeners which are registered by the context will be removed.
     *
     * @api-version 1
     * @user
     */
    removeAll(context: Context, event?: string): void;
}

/**
 * A listener to know when a running component's state has been changed.
 *
 * @api-version 1
 * @system
 */
export type ModuleComponentStopListener = (context: Context) => void;

/**
 * Interface definition for a callback to be invoked when a framework module's state is changed.
 *
 * @api-version 1
 * @user
 */
export interface FrameworkModuleStateListener {
    /**
     * Called when a framework module has been unloaded.
     *
     * @param packageName The unloaded framework module's package name.
     * @param uniqueId The unloaded framework module's unique id.
     *
     * @api-version 1
     * @user
     */
    onUnloaded(packageName: string, uniqueId: number): void;

    /**
     * Called when a framework module has been reloaded.
     *
     * @param packageName The unloaded framework module's package name.
     * @param uniqueId The unloaded framework module's unique id.
     *
     * @api-version 1
     * @user
     */
    onReloaded(packageName: string, uniqueId: number): void;
}

/**
 * Options for installing module package.
 *
 * @api-version 1
 * @system
 */
export type PackageInstallOptions = {
    /**
     * Set true to hide feedback UI (e.g. Toast, Dialog, etc.)
     *
     * @api-version 1
     * @system
     */
    hideUi?: boolean;
}

/**
 * Options for updating module package.
 *
 * @api-version 1
 * @system
 */
export type PackageUpdateOptions = {
    /**
     * Set true to hide feedback UI (e.g. Toast, Dialog, etc.)
     *
     * @api-version 1
     * @system
     */
    hideUi?: boolean;
}

/**
 * Options for uninstalling module package.
 *
 * @api-version 1
 * @system
 */
export type PackageInstallOrUpdateOptions = {
    /**
     * Set true to hide feedback UI (e.g. Toast, Dialog, etc.)
     *
     * @api-version 1
     * @system
     */
    hideUi?: boolean;
}

/**
 * Options for uninstalling module package.
 *
 * @api-version 1
 * @system
 */
export type PackageUninstallOptions = {
    /**
     * Set true to hide feedback UI (e.g. Toast, Dialog, etc.)
     *
     * @api-version 1
     * @system
     */
    hideUi?: boolean;
}

/**
 * System manager for managing module packages.
 * Through this you can retrieve various kinds of information related to the module packages that are currently installed on the DART-Platform.
 *
 * @api-version 1
 * @user
 */
export interface IModulePackageManager extends ISystemManager {
    /**
     * {@link Monitorable} an array of {@link IModulePackageInfo}.
     *
     * @api-version 1
     * @system
     */
    readonly packageInfos: Monitorable<IModulePackageInfo[]>;

    /**
     * {@link Monitorable} an array of favorite component data.
     *
     * @api-version 1
     * @system
     */
    readonly favoriteComponentInfos: Monitorable<{ packageName: string, componentId: string }[]>;

    /**
     * {@link Monitorable} an array of target framework modules to loading automatically.
     *
     * @api-version 2
     * @user
     */
    readonly autoLoadFrameworkModules: Monitorable<{ packageName: string, subTypes: string[] }[]>;

    /**
     * Install the given module package file or data.
     * If already module package which has same package name has been installed, then the operation will be failed.
     * This operation will be failed as below situation:
     * - Already module package which has same package name has been installed
     * - Requested module package's sdkVersion is not valid on system.
     *
     * @param packageFile A .dm file path or data of the module package to install.
     * @param name A name of a requested module package.
     * @param options Additional options ({@link PackageInstallOptions}).
     * @return {@link IModulePackageInfo} object after installation the module successfully, otherwise null.
     *
     * @api-version 1
     * @system
     */
    install(packageFile: string | Uint8Array, name: string, options?: PackageInstallOptions): Promise<IModulePackageInfo>;

    /**
     * Update the given module package file or data.
     * This operation will be failed as below situation:
     * - There is no module package which is matched with the package name.
     * - Signatures of old module package and new module package are not same.
     * - Requested module package's version is lower than installed module package.
     * - Requested module package's sdkVersion is not valid on system.
     *
     * @param packageFile A .dm file path or data of the module package to install.
     * @param name A name of a requested module package.
     * @param options Additional options ({@link PackageUpdateOptions}).
     * @return {@link IModulePackageInfo} object after installation the module successfully, otherwise null.
     *
     * @api-version 1
     * @system
     */
    update(packageFile: string | Uint8Array, name: string, options?: PackageUpdateOptions): Promise<IModulePackageInfo>;

    /**
     * Install the given module package file or data.
     * If already module package which has same package name has been installed, then system will try to update the module package.
     *
     * @param packageFile A .dm file path or data of the module package to install.
     * @param name A name of a requested module package.
     * @param options Additional options ({@link PackageInstallOrUpdateOptions}).
     * @return {@link IModulePackageInfo} object after installation the module successfully, otherwise null.
     *
     * @api-version 1
     * @system
     */
    installOrUpdate(packageFile: string | Uint8Array, name: string, options?: PackageInstallOrUpdateOptions): Promise<IModulePackageInfo>;

    /**
     * Uninstall the given module package name.
     * If there is no module package which is matched with the package name, then the operation will be failed.
     *
     * @param packageName A package name of the module package to uninstall.
     * @param name A name of a requested module package.
     * @param options Additional options ({@link PackageUninstallOptions}).
     * @return Return true if the package has been uninstalled successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    uninstall(packageName: string, name: string, options?: PackageUninstallOptions): Promise<void>;

    /**
     * Call to retrieve all installed module packages.
     *
     * @return Return array of {@link IModulePackageInfo} objects containing information about the module package, or null if there are none.
     *
     * @api-version 1
     * @user
     */
    getModulePackageInfos(): IModulePackageInfo[];

    /**
     * Call to retrieve installed module packages that matched with the module type.
     *
     * @param type The module type of the desired module package. If it is null or not defined, all installed module packages are retrieved.
     * @return Return array of {@link IModulePackageInfo} objects containing information about the module package, or null if there are none.
     *
     * @api-version 1
     * @user
     */
    getModulePackageInfosByType(type: string): IModulePackageInfo[];

    /**
     * Call to retrieve an installed module package that matched with the package name. This value cannot be null.
     *
     * @param packageName The package name of the desired module package.
     * @return {@link IModulePackageInfo} object containing information about the module package, or null if there are none.
     *
     * @api-version 1
     * @user
     */
    getModulePackageInfo(packageName: string): IModulePackageInfo | null;

    /**
     * Call to query module screen components that matched with the {@link Message}.
     *
     * @param message The message of the desired module package.
     * @return Return array of {@link IModuleResolveInfo} objects containing information about the module package, or null if there are none.
     *
     * @api-version 1
     * @user
     */
    queryModuleScreenInfo(message: Message): IModuleResolveInfo[];

    /**
     * Call to query module service components that matched with the {@link Message}.
     *
     * @param message The message of the desired module package.
     * @return Return array of {@link IModuleResolveInfo} objects containing information about the module package, or null if there are none.
     *
     * @api-version 1
     * @user
     */
    queryModuleServiceInfo(message: Message): IModuleResolveInfo[];

    /**
     * Call to query module database components that matched with the {@link Message}.
     *
     * @param message The message of the desired module package.
     * @return Return array of {@link IModuleResolveInfo} objects containing information about the module package, or null if there are none.
     *
     * @api-version 1
     * @user
     */
    queryModuleDatabaseInfo(message: Message): IModuleResolveInfo[];

    /**
     * Get whether the given module package is installed.
     *
     * @param packageName The package name of the desired module package.
     * @return Whether the given module package is installed.
     *
     * @api-version 1
     * @user
     */
    isInstalled(packageName: string): boolean;

    /**
     * Set favorite state of the component.
     *
     * @param packageName The package name of the desired module package.
     * @param componentId The component id of the desired module package.
     * @param favorite True if the component is set as favorite.
     *
     * @api-version 1
     * @system
     */
    setFavoriteComponent(packageName: string, componentId: string | null, favorite: boolean): void;

    /**
     * Set a staring module component.
     * When Dart-Platform booting is complete, the component registered as a starting component is automatically executed.
     *
     * @param packageName The package name of the desired module package.
     * @param options optional information about the component of the starting module package.
     * @param enabled True if you want to set the module package as starting module.
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    setStartingComponent(packageName: string, options: { action?: string, category?: string, componentId?: string } | null, enabled: boolean): boolean;

    /**
     * Return essential module package names
     *
     * @return module package names which are required essentially to run DART-Platform.
     *
     * @api-version 1
     * @system
     */
    getEssentialModulePackageNames(): string[];

    /**
     * Return essential shortcut's module package names
     *
     * @return module package names which are essentially registered as shortcut.
     *
     * @api-version 1
     * @system
     */
    getEssentialShortcutModulePackageNames(): string[];

    /**
     * Query installed framework module packages.
     *
     * @return An array of {@link FrameworkModulePackageInfo}
     *
     * @api-version 1
     * @user
     */
    getInstalledFrameworkModulePackages(): Promise<FrameworkModulePackageInfo[]>;

    /**
     * Load a framework module.
     *
     * @param packageName A desired framework module package name to load.
     * @param subType A desired module's subtype {@link Manifest.FRAMEWORK_SUB_TYPE}
     * @return status operation status {@link FrameworkModuleStatus}
     *         uniqueId module handle uniqueId.
     *
     * @api-version 1
     * @user
     */
    loadFrameworkModule(packageName: string, subType: string): Promise<{ status: FrameworkModuleStatus, uniqueId: number }>;

    /**
     * Unload a framework module.
     *
     * @param uniqueId The unique id of module to be unloaded.
     * @return An operation status {@link FrameworkModuleStatus}
     *
     * @api-version 1
     * @user
     */
    unloadFrameworkModule(uniqueId: number): Promise<FrameworkModuleStatus>;

    /**
     * Sets whether to load a framework package automatically.
     *
     * @param enabled Whether to load the {@link packageName} automatically.
     * @param packageName A desired framework module package name to load.
     * @param subType A desired framework module's subtype {@link Manifest.FRAMEWORK_SUB_TYPE}. If {@link subType} is null and {@link enabled} is false, all subTypes will be disabled.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @system
     */
    setAutoLoadFrameworkModuleEnabled(enabled: boolean, packageName: string, subType?: string): Promise<boolean>;

    /**
     * Register a {@link FrameworkModuleStateListener} to be notified of framework module's state changes.
     *
     * @param listener The {@link FrameworkModuleStateListener} to be registered.
     *
     * @api-version 1
     * @user
     */
    registerFrameworkModuleStateListener(listener: Partial<FrameworkModuleStateListener>): void;

    /**
     * Unregisters a {@link FrameworkModuleStateListener} you previously registered using {@link registerFrameworkModuleStateListener}.
     *
     * @param listener The {@link FrameworkModuleStateListener} to be unregistered.
     *
     * @api-version 1
     * @user
     */
    unregisterFrameworkModuleStateListener(listener: Partial<FrameworkModuleStateListener>): void;
}

/**
 * System manager for managing module's screen component.
 * Through this you can run module's screen component.
 *
 * @api-version 1
 * @user
 */
export interface IModuleScreenManager extends ISystemManager {
    /**
     * Start a screen component of desired module package. The screen component will be display on a new screen.
     * If the screen component already started, then the screen that contains the screen will be focused.
     * Only a context which has a system permission could use {@link Message.CATEGORY_FULL_SCREEN} or {@link Message.CATEGORY_POPUP_SCREEN}.
     *
     * @param message The {@link Message} which is described about desired screen component.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    startModuleScreen(message: Message): Promise<boolean>;

    /**
     * Close a screen component.
     * If it doesn't have system permission, then module is able to stop only its screen component.
     *
     * @param packageInfo A module's {@link IModulePackageInfo}.
     * @param componentInfo A target screen's {@link IModuleComponentInfo}.
     * @param screenType A target screen's {@link ScreenType} (default={@link ScreenType.TAB}). Only a context which has a system permission could set this parameter.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    stopModuleScreen(packageInfo: IModulePackageInfo, componentInfo: IModuleComponentInfo, screenType?: ScreenType): Promise<boolean>;

    /**
     * Start a PiP screen component as PiP (Picture-in-Picture) of desired module package. The screen component will be appended to caller's HTMLElement.
     * You can only append a screen component which is defined as {@link Message.CATEGORY_PIP_SCREEN} in manifest.json - 'screens'.
     *
     * @param message The {@link Message} which is described about desired screen component.
     * @param container A caller's HTMLElement that is destination to append a screen component.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    startPipModuleScreen(message: Message, container: HTMLElement): Promise<boolean>;

    /**
     * Stop a PiP screen component which has been started as PiP of desired module package. The screen component will be removed from caller's HTMLElement.
     * You can only remove a screen component which is defined as {@link Message.CATEGORY_PIP_SCREEN} in manifest.json - 'screens'.
     *
     * @param message The {@link Message} which is described about desired screen component.
     * @param container A caller's HTMLElement that is contains the desired screen component.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    stopPipModuleScreen(message: Message, container: HTMLElement): Promise<boolean>;

    /**
     * Bind to a screen component.
     *
     * @param message A {@link Message} which is described to the desired screen component.
     * @param binder A {@link IModuleComponentBinder} interface to receive information as the screen component is bound and unbound.
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    bindModuleScreen(message: Message, binder: IModuleComponentBinder): Promise<boolean>;

    /**
     * Unbind from a screen component.
     *
     * @param message A {@link Message} previously supplied to {@link bindModuleScreen}.
     * @param binder A {@link IModuleComponentBinder} interface previously supplied to {@link bindModuleScreen}.
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    unbindModuleScreen(message: Message, binder: IModuleComponentBinder): Promise<boolean>;

    /**
     * Bind to a PiP screen component of desired module package.
     *
     * @param message A {@link Message} of the desired screen component.
     * @param container A caller's HTMLElement that is contains the desired screen component.
     * @param binder A {@link IModuleComponentBinder} interface to receive information as the screen component is bound and unbound.
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    bindPipModuleScreen(message: Message, container: HTMLElement, binder: IModuleComponentBinder): Promise<boolean>;

    /**
     * Unbind from a PiP screen component.
     *
     * @param message A {@link Message} previously supplied to {@link bindPipModuleScreen}.
     * @param container A caller's HTMLElement that is contains the desired screen component.
     * @param binder A {@link IModuleComponentBinder} interface previously supplied to {@link bindPipModuleScreen}.
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    unbindPipModuleScreen(message: Message, container: HTMLElement, binder: IModuleComponentBinder): Promise<boolean>;
}

/**
 * System manager for managing module's service component.
 * Through this you can run module's service component.
 *
 * @api-version 1
 * @user
 */
export interface IModuleServiceManager extends ISystemManager {
    /**
     * Bind to a service component of desired module package.
     *
     * @param message A {@link Message} of the desired service component.
     * @param binder A {@link IModuleComponentBinder} interface to receive information as the service component is bound and unbound.
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    bindModuleService(message: Message, binder: IModuleComponentBinder): Promise<boolean>;

    /**
     * Unbind from a service component.
     *
     * @param message A {@link Message} previously supplied to {@link IModuleServiceManager.bindModuleService}.
     * @param binder A {@link IModuleComponentBinder} interface previously supplied to {@link IModuleServiceManager.bindModuleService}.
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    unbindModuleService(message: Message, binder: IModuleComponentBinder): Promise<boolean>;
}

/**
 * System manager to interact with DART-Store.
 * Through this you can retrieve various kinds of information related to the module packages that are currently updated on the DART-Store
 *
 * @api-version 1
 * @system
 */
export interface IDartStoreManager extends ISystemManager {
    /**
     * auto register serial number to Dart-Store
     *
     * @param tokenId when login store, received the token id.
     *
     * @api-version 1
     * @system
     */
    registerStoreInformation(tokenId: string): void;

    /**
     * For changing the status of module to Activate in online or offline
     *
     * @param data The data that authentication of Active for sending store.
     * @return Return result that response from store
     *
     * @api-version 1
     * @system
     */
    requestModuleActivation(data: StoreAuthenticationData): Promise<boolean>

    /**
     * For changing the status of module to Deactivate in online or offline
     *
     * @param data The data that authentication of Active for sending store.
     * @return Return result that response from store
     *
     * @api-version 1
     * @system
     */
    requestModuleDeactivation(data: StoreAuthenticationData): Promise<boolean>

    /**
     * To check Dart-Store login status
     *
     * @return Return Login status results
     *
     * @api-version 2
     * @system
     */
    checkLoginStatus(): Promise<boolean>;

    /**
     * Show a dialog to log in with Dart-Store account.
     *
     * @param customTitle A custom title. If it is not set, then default title will be displayed.
     * @param customMessage A custom message. If it is not set, then default message will be displayed.
     * @return Return <Promise> Fulfills with true if user successfully log in, otherwise false.
     *
     * @api-version 2
     * @system
     */
    showLoginStore(customTitle?: string, customMessage?: string): Promise<boolean>;

    /**
     * Export deactivate code of each module as file.
     *
     * @param targets Target {@link StoreAuthenticationData} to export.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise {@link FilePickerErrorCode}.
     *
     * @api-version 2
     * @system
     */
    exportDeactivateCodeFiles(targets: StoreAuthenticationData[]): Promise<{ result: boolean, errorCode?: FilePickerErrorCode }>;
}
// [END] Module Control System API /////////////////////////


// [START] Robot Control System API
/**
 * This is an enumeration type constant that refers to the error of communication, and is defined as follows.
 *
 * @enum
 * @api-version 3
 * @user
 */
export const CommunicationError = {
    /**
     * Unknown Error.
     *
     * @api-version 3
     * @user
     */
    UNKNOWN: 1,
    /**
     * Not connected with Controller.
     *
     * @api-version 3
     * @user
     */
    NOT_CONNECTED: 2,
    /**
     * Controller would not process the request due to something the Controller considered to be a client error.
     *
     * @api-version 3
     * @user
     */
    BAD_REQUEST: 400,
    /**
     * Request was not successful because it lacks valid authentication credentials for the requested resource.
     *
     * @api-version 3
     * @user
     */
    UNAUTHORIZED: 401,
    /**
     * Controller understood the request but refused to process it.
     *
     * @api-version 3
     * @user
     */
    NO_PERMISSION: 403,
    /**
     * Controller cannot find the requested resource.
     *
     * @api-version 3
     * @user
     */
    NOT_FOUND: 404,
    /**
     * Controller knows the request method, but the target resource doesn't support this method.
     *
     * @api-version 3
     * @user
     */
    METHOD_NOT_ALLOWED: 405,
    /**
     * Controller would like to shut down this unused connection.
     *
     * @api-version 3
     * @user
     */
    REQUEST_TIMEOUT: 408,
    /**
     * Controller encountered an unexpected condition that prevented it from fulfilling the request.
     *
     * @api-version 3
     * @user
     */
    INTERNAL_SERVER_ERROR: 500,
    /**
     * Controller was acting as a gateway or proxy and that it received an invalid response from the upstream server.
     *
     * @api-version 3
     * @user
     */
    GATEWAY_TIMEOUT: 504
} as const
/**
 * @ignore
 */
export type CommunicationError = typeof CommunicationError[keyof typeof CommunicationError];

/**
 * system alarm log data
 *
 * @api-version 1
 * @user
 */
export type LogAlarm = {
    /**
     * Level of alarm log.
     *
     * @api-version 1
     * @user
     */
    level: AlarmLogLevel;

    /**
     * Category of alarm log.
     *
     * @api-version 1
     * @user
     */
    group: AlarmLogCategory;

    /**
     * Error Code of alarm log.
     *
     * @api-version 1
     * @user
     */
    index: number;

    /**
     * first Parameter of alarm log.
     *
     * @api-version 1
     * @user
     */
    param1: string;

    /**
     * second Parameter of alarm log.
     *
     * @api-version 1
     * @user
     */
    param2: string;

    /**
     * third Parameter of alarm log.
     *
     * @api-version 1
     * @user
     */
    param3: string;
};

/**
 * IMotionManager have motion api in Robot.
 * For example, servoOn(), systemShutDown(), reboot() etc...
 *
 * @api-version 1
 * @user
 */
 export interface IMotionManager extends ISystemManager {
    /**
     * {@link Monitorable} Speed mode (0: normal, 1: reduced)
     *
     * @api-version 1
     * @user
     */
    readonly speedMode: Monitorable<SpeedMode>;

    /**
     * Jog Motion
     *
     * @param type Jog Space ("joint", "task")
     * @param axis jog Axis (J1~J6 : 1~6, X~RZ: 1~6)
     * @param moveReference reference coordinate (BASE: 0, TOOL: 1, WORLD: 2, USER_MIN: 101 ~ USER_MAX: 200)
     * @param velocity Jog  % of base speed (-100 ~ 100 )
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, JogAxis, IMotionManager, RobotSpace} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{motionManager.jogControl(RobotSpace.JOINT, JogAxis.J1, 0, 10)}}
     *              onTouchEnd={()=>{motionManager.jogControlStop()}
     *          />
     *      )
     *  }
     */
    jogControl(type: RobotSpace, axis: JogAxis, moveReference: number, velocity: number): Promise<boolean>;

    /**
     * Jog Motion Stop
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, JogAxis, IMotionManager, RobotSpace} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{motionManager.jogControl(RobotSpace.JOINT, JogAxis.J1, 0, 10)}}
     *              onTouchEnd={()=>{motionManager.jogControlStop()}
     *          />
     *      )
     *  }
     */
    jogControlStop(): Promise<boolean>;

    /**
     * Wait for the previous motion command to end.
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, DR_NONE} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveJoint([0,0,90,0,90,0], 30, 60, DR_NONE, 0, 0, 0);
     *                  motionManager.moveWait()
     *                  .then(r => {
     *                      Toast.show(IToast.TYPE_INFO, null, `${The robot has stopped.}`);
     *                  });
     *              }}
     *              onTouchEnd={()=>{motionManager.jogControlStop()}
     *          />
     *      )
     *  }
     */
    moveWait(): Promise<boolean>;

    /**
     * (movej) Joint moving function.
     * Moves the robot from the current joint position to the targeted joint position.
     *
     * @param targetPose sets six positions(j1,j2,j3,j4,j5,j6)
     * @param targetVelocity sets velocity. This value can be set for each joint or collectively.
     * @param targetAcceleration sets acceleration. This value can be set for each joint or collectively.
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode. Enumerated constants which means the definition reference about the position to be moved when performing motion control, based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param blendingRadius  sets blend radius
     * - `default` 0
     * @param blendingType sets blend type. enumerated type which means blending speed type of each stop over when performing motion control at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and instead handled based on the targetTime.
     * - In case the following motion is blended with the condition of which blendingType is 0 and blendingRadius is bigger than 0, or in case the remaining motion time which is decided by the remaining distance speed and acceleration of preceding motion is longer than the motion time of following motion, the preceding motion will be terminated after the following motion is terminated.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, DR_NONE, StopType, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveJoint([0,0,90,0,90,0], 30, 60, DR_NONE, 0, 0, 0);
     *                  motionManager.moveWait()
     *                  .then(r => {
     *                      Toast.show(IToast.TYPE_INFO, null, `${The robot has stopped.}`);
     *                  });
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveJoint(targetPose: SixNumArray, targetVelocity: number|SixNumArray, targetAcceleration: number|SixNumArray, targetTime: number, moveMode: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * (movel) linear moving function
     *
     * @param targetPose set six positions(x,y,z,rz,ry,rx)
     * @param targetVelocity set two velocity (Linear velocity, Rotational velocity)
     * @param targetAcceleration set two acceleration (Linear acceleration, Rotational acceleration)
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode.
     * Enumerated constant which means the definition reference about the position to be moved when performing motion control based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param moveReference sets coordinate.
     * Enumerated constants which means the definition standard about the position to go when the robot controller performs the motion control based on the work space.
     * - 0: Robot base
     * - 1: Robot TCP
     * - `default` 0
     * @param blendingRadius set blend radius
     * - `default` 0
     * @param blendingType set blend type
     * Enumerated constants which means blending speed type of each stopover point when motion control is performed at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, DR_NONE, StopType, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveLinear([600,0,1000,0,180,0], [30,30], [60,60], DR_NONE, 0, 0, 0, 0);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveLinear(targetPose: SixNumArray, targetVelocity: TwoNumArray, targetAcceleration: TwoNumArray, targetTime: number, moveMode: number, moveReference: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * (movel) linear moving function
     *
     * @param targetPose set {@link ManipulatorPose}
     * @param targetVelocity set two velocity (Linear velocity, Rotational velocity)
     * @param targetAcceleration set two acceleration (Linear acceleration, Rotational acceleration)
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode.
     * Enumerated constant which means the definition reference about the position to be moved when performing motion control based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param moveReference sets coordinate.
     * Enumerated constants which means the definition standard about the position to go when the robot controller performs the motion control based on the work space.
     * - 0: Robot base
     * - 1: Robot TCP
     * - `default` 0
     * @param blendingRadius set blend radius
     * - `default` 0
     * @param blendingType set blend type
     * Enumerated constants which means blending speed type of each stopover point when motion control is performed at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, DR_NONE, StopType, SolutionSpace, OrientationType, DR_TURN_AUTO, ManipulatorPose} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos = {pose:[600,0,1000,0,180,0],solutionSpace:SolutionSpace.TYPE_AUTO,turnNo:DR_TURN_AUTO,orientationType:OrientationType.ZYX} as ManipulatorPose
     *                  motionManager.moveLinear(pos, [30,30], [60,60], DR_NONE, 0, 0, 0, 0);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveLinear(targetPose: ManipulatorPose, targetVelocity: TwoNumArray, targetAcceleration: TwoNumArray, targetTime: number, moveMode: number, moveReference: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * (movejx) Joint moving function from Task Pose.
     * Moves the robot to the target position within the joint area with robot controller. The target position moves same as the movel as it is the location within the workspace. However, because the robot motion acts inside the joint area, the straight path to the target position cannot be guaranteed. Additionally, one of the 8 robot configurations that responds to one work space coordinate, must be assigned to the solutionSpace (solution space).
     *
     * @param targetPose sets six positions(x,y,z,rz,ry,rx)
     * @param solutionSpace sets solution space (0 ~ 7)
     * @param targetVelocity sets velocity. This value can be set for each joint or collectively.
     * @param targetAcceleration sets acceleration. This value can be set for each joint or collectively.
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode.
     * Enumerated constant which means the definition reference about the position to be moved when performing motion control based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param moveReference sets coordinate.
     * Enumerated constants which means the definition standard about the position to go when the robot controller performs the motion control based on the work space.
     * - 0: Robot base
     * - 1: Robot TCP
     * - `default` 0
     * @param blendingRadius sets blend radius
     * - `default` 0
     * @param blendingType sets blend type
     * Enumerated constants which means blending speed type of each stopover point when motion control is performed at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and handled based on the targetTime.
     * - About the path of blending status according to the option blendingType, targetVelocity, and targetAcceleration, refer to the movej () motion description.
     * - When inputting relative motion (moveMode= 1), it cannot be blended to the processing motion, so it is recommended to blend by using amovej () or amovel.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, DR_NONE, StopType, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveJointPosx([600,0,1000,0,180,0], 2, 30, 60, DR_NONE, 0, 0, 0, 0);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveJointPosx(targetPose: SixNumArray, solutionSpace: number, targetVelocity: number|SixNumArray, targetAcceleration: number|SixNumArray, targetTime: number, moveMode: number, moveReference: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * (movejx) Joint moving function from Task Pose.
     * Moves the robot to the target position within the joint area with robot controller. The target position moves same as the movel as it is the location within the workspace. However, because the robot motion acts inside the joint area, the straight path to the target position cannot be guaranteed. Additionally, one of the 8 robot configurations that responds to one work space coordinate, must be assigned to the solutionSpace (solution space).
     *
     * @param targetPose sets {@link Manipulator}
     * @param targetVelocity sets velocity. This value can be set for each joint or collectively.
     * @param targetAcceleration sets acceleration. This value can be set for each joint or collectively.
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode.
     * Enumerated constant which means the definition reference about the position to be moved when performing motion control based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param moveReference sets coordinate.
     * Enumerated constants which means the definition standard about the position to go when the robot controller performs the motion control based on the work space.
     * - 0: Robot base
     * - 1: Robot TCP
     * - `default` 0
     * @param blendingRadius sets blend radius
     * - `default` 0
     * @param blendingType sets blend type
     * Enumerated constants which means blending speed type of each stopover point when motion control is performed at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and handled based on the targetTime.
     * - About the path of blending status according to the option blendingType, targetVelocity, and targetAcceleration, refer to the movej () motion description.
     * - When inputting relative motion (moveMode= 1), it cannot be blended to the processing motion, so it is recommended to blend by using amovej () or amovel.
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, DR_NONE, StopType, SolutionSpace, DR_TURN_AUTO, OrientationType, ManipulatorPose} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos = {pose:[600,0,1000,0,180,0],solutionSpace:SolutionSpace.TYPE_AUTO,turnNo:DR_TURN_AUTO,orientationType:OrientationType.ZYX} as ManipulatorPose
     *                  motionManager.moveJointPosx(pos, 30, 60, DR_NONE, 0, 0, 0, 0);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveJointPosx(targetPose: ManipulatorPose, targetVelocity: number|SixNumArray, targetAcceleration: number|SixNumArray, targetTime: number, moveMode: number, moveReference: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * (servoj) Joint moving function.
     * Moves the robot from the current joint position to the targeted joint position.
     * Generates the path of moving to corresponding joint position even if the target changes every moment. It is in order to instantly respond to outer environment change during the movement of robot from client to the robot controller.
     *
     * @param targetPose sets six positions(j1,j2,j3,j4,j5,j6)
     * @param targetVelocity sets six velocities(j1,j2,j3,j4,j5,j6)
     * @param targetAcceleration sets six accelerations(j1,j2,j3,j4,j5,j6)
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and instead handled based on the targetTime.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, DR_NONE, StopType, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveServoJoint([0,0,90,0,90,0], Array.from({length: 6}, () => 10), Array.from({length: 6}, () => 20), DR_NONE);
     *                  setTimeout(() => {
     *                    motionManager.moveServoJoint([10,0,90,0,90,10], Array.from({length: 6}, () => 10), Array.from({length: 6}, () => 20), DR_NONE);
     *                  }, 100);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveServoJoint(targetPose: SixNumArray, targetVelocity: SixNumArray, targetAcceleration: SixNumArray, targetTime: number): Promise<boolean>;

    /**
     * (servol) linear moving function.
     * Moves the robot from the current task position to the targeted task position.
     * Generates the path of moving to corresponding task position even if the target changes every moment. Unlike movel, it is in order to instantly respond to outer environment change during the movement of robot from client to the robot controller.
     *
     * @param targetPose Six Task Space information (unit: mm or deg)
     * @param targetVelocity Two speed information: Maximum Translation speed (mm/sec), Maximum Rotation speed (unit: deg/sec2  )
     * @param targetAcceleration Acceleration information -Two acceleration information: Maximum Translation acceleration, and Maximum Rotation acceleration(unit: deg/sec2  )
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and instead handled based on the targetTime.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, DR_NONE, StopType, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveServoLinear([600,0,1000,0,180,0], [10, 10], [20, 20]), DR_NONE);
     *                  setTimeout(() => {
     *                      motionManager.moveServoLinear([600,100,1000,0,180,0], [10, 10], [20, 20]), DR_NONE);
     *                  }, 100);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveServoLinear(targetPose: SixNumArray, targetVelocity: TwoNumArray, targetAcceleration: TwoNumArray, targetTime: number): Promise<boolean>;

    /**
     * (servol) linear moving function.
     * Moves the robot from the current task position to the targeted task position.
     * Generates the path of moving to corresponding task position even if the target changes every moment. Unlike movel, it is in order to instantly respond to outer environment change during the movement of robot from client to the robot controller.
     *
     * @param targetPose {@link ManipulatorPose}
     * @param targetVelocity Two speed information: Maximum Translation speed (mm/sec), Maximum Rotation speed (unit: deg/sec2  )
     * @param targetAcceleration Acceleration information -Two acceleration information: Maximum Translation acceleration, and Maximum Rotation acceleration(unit: deg/sec2  )
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and instead handled based on the targetTime.
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, DR_NONE, StopType, SolutionSpace, DR_TURN_AUTO, OrientationType, ManipulatorPose} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos1 = {pose:[600,0,1000,0,180,0],solutionSpace:SolutionSpace.TYPE_AUTO,turnNo:DR_TURN_AUTO,orientationType:OrientationType.ZYX} as ManipulatorPose
     *                  const pos2 = {pose:[600,100,1000,0,180,0],solutionSpace:SolutionSpace.TYPE_AUTO,turnNo:DR_TURN_AUTO,orientationType:OrientationType.ZYX} as ManipulatorPose
     *                  motionManager.moveServoLinear(pos1, [10, 10], [20, 20]), DR_NONE);
     *                  setTimeout(() => {
     *                      motionManager.moveServoLinear(pos2, [10, 10], [20, 20]), DR_NONE);
     *                  }, 100);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveServoLinear(targetPose: ManipulatorPose, targetVelocity: TwoNumArray, targetAcceleration: TwoNumArray, targetTime: number): Promise<boolean>;

    /**
     * (parallel_axis) This function matches the normal vector of the plane consists of Points.
     *
     * @param targetPose1 set point(x,y,z,rz,ry,rx)
     * @param targetPose2 set point(x,y,z,rz,ry,rx)
     * @param targetPose3 set point(x,y,z,rz,ry,rx)
     * @param taskAxis Refer to the Definition of Constant and Enumeration Type
     * @param sourceReference Refer to the Definition of Constant and Enumeration Type
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, TaskAxis, CoordinateSystem} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos1 = [0,0,0,0,0,0]
     *                  const pos2 = [100,0,0,0,0,0]
     *                  const pos3 = [100,100,0,0,0,0]
     *                  motionManager.moveParallelToAxis(pos1, pos2, pos3, TaskAxis.Z, CoordinateSystem.BASE);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveParallelToAxis(targetPose1: SixNumArray, targetPose2: SixNumArray, targetPose3: SixNumArray, taskAxis: TaskAxis, sourceReference: CoordinateSystem): Promise<boolean>;

    /**
     * (align_axis) This function matches the normal vector of the plane consists of Points.
     *
     * @param targetPose1 set point(x,y,z,rz,ry,rx)
     * @param targetPose2 set point(x,y,z,rz,ry,rx)
     * @param targetPose3 set point(x,y,z,rz,ry,rx)
     * @param sourceVector set normal vector
     * @param taskAxis Refer to the Definition of Constant and Enumeration Type
     * @param eTargetRef Refer to the Definition of Constant and Enumeration Type
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, TaskAxis, CoordinateSystem} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos1 = [0,0,0,0,0,0]
     *                  const pos2 = [100,0,0,0,0,0]
     *                  const pos3 = [100,100,0,0,0,0]
     *                  const origin = [600,0,1000]
     *                  motionManager.moveToAxisWithAlign(pos1, pos2, pos3, origin, TaskAxis.Z, CoordinateSystem.BASE);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveToAxisWithAlign(targetPose1: SixNumArray, targetPose2: SixNumArray, targetPose3: SixNumArray, sourceVector: ThreeNumArray, taskAxis: TaskAxis, targetReference: CoordinateSystem): Promise<boolean>;

    /**
     * (stop) Move Stop
     *
     * @param stopType Stop Type(QUICK_STO: 0, QUICK: 1, SLOW: 2, EMERGENCY: 3)
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveJoint([0,0,90,0,90,0], 30, 60, DR_NONE, 0, 0, 0);
     *                  motionManager.moveWait()
     *                  .then(r => {
     *                      Toast.show(IToast.TYPE_INFO, null, `${The robot has stopped.}`);
     *                  });
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveStop(stopType: StopType): Promise<boolean>;

    /**
     * homing motion
     * If getUserHome is false, use HWHome, otherwise use UserHome.
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToHome()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToHomeStop()}
     *          />
     *      )
     *  }
     */
    moveToHome(): Promise<boolean>;

     /**
     * homing motion stop
     * If getUserHome is false, use HWHome, otherwise use UserHome.
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToHome()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToHomeStop()}
     *          />
     *      )
     *  }
     */
    moveToHomeStop(): Promise<boolean>;

    /**
     * homing motion
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToHWHome()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToHWHomeStop()}
     *          />
     *      )
     *  }
     */
    moveToHWHome(): Promise<boolean>;

     /**
     * homing motion stop
     * If getUserHome is false, use HWHome, otherwise use UserHome.
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     */
    moveToHomeStop(): Promise<boolean>;

    /**
     * homing motion
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     */
    moveToHWHome(): Promise<boolean>;

    /**
     * homing motion stop
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToHWHome()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToHWHomeStop()}
     *          />
     *      )
     *  }
     */
    moveToHWHomeStop(): Promise<boolean>;

    /**
     * user homing motion
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToUserHome()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToUserHomeStop()}
     *          />
     *      )
     *  }
     */
    moveToUserHome(): Promise<boolean>;

    /**
     * user homing motion stop
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToUserHome()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToUserHomeStop()}
     *          />
     *      )
     *  }
     */
    moveToUserHomeStop(): Promise<boolean>;

    /**
     * set custom user home pose
     *
     * @param targetPose user home pose (j1,j2,j3,j4,j5,j6)
     * @return Promise<boolean>
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      useEffect(() => {
     *          motionManager.setUserHomePose([0,0,90,0,90,0]);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    setUserHomePose(targetPose: SixNumArray): Promise<boolean>;

    /**
     * get custom user home pose
     *
     * @return Promise<SixNumArray> current user home pose (j1,j2,j3,j4,j5,j6)
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      useEffect(() => {
     *          motionManager.getUserHomePose()
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `SystemIpAddress: ${JSON.stringify(r)}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getUserHomePose(): Promise<SixNumArray>;

    /**
     * whether to use user home.
     *
     * @param use use moveToUserHome(true), use moveToHWHome(false)
     * @return Promise<boolean>
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      useEffect(() => {
     *          motionManager.setUseUserHome(true);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    setUseUserHome(use: boolean): Promise<boolean>;

    /**
     * whether to use user home.
     *
     * @return Promise<boolean> moveToUserHome(true), use moveToHWHome(false)
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      useEffect(() => {
     *          const result = motionManager.getUseUserHome();
     *          Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(result)}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getUseUserHome(): boolean;

    /**
     * Hold to run
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @deprecated This API no longer works and there is no need to use it.
     */
    holdToRun(): Promise<boolean>;

    /**
     * Hold to run
     * Jog Motion
     *
     * @param type Jog Space ("joint", "task")
     * @param axis jog Axis (J1~J6 : 1~6, X~RZ: 1~6)
     * @param moveReference reference coordinate (BASE: 0, TOOL: 1, WORLD: 2, USER_MIN: 101 ~ USER_MAX: 200)
     * @param velocity Jog  % of base speed (-100 ~ 100 )
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, RobotSpace, JogAxis} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{motionManager.jogControlH2R(RobotSpace.JOINT, JogAxis.J1, 0, 10)}}
     *              onTouchEnd={()=>{motionManager.jogControlStopH2R()}
     *          />
     *      )
     *  }
     */
    jogControlH2R(type: RobotSpace, axis: JogAxis, moveReference: number, velocity: number): Promise<boolean>;

    /**
     * Hold to run
     * Jog Motion Stop
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, RobotSpace, JogAxis} from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{motionManager.jogControlH2R(RobotSpace.JOINT, JogAxis.J1, 0, 10)}}
     *              onTouchEnd={()=>{motionManager.jogControlStopH2R()}
     *          />
     *      )
     *  }
     */
    jogControlStopH2R(): Promise<boolean>;

    /**
     * Hold to run
     * homing motion
     *  If getUserHome is false, go to HWHome, otherwise go to UserHome.
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToHomeH2R()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToHomeStopH2R()}
     *          />
     *      )
     *  }
     */
    moveToHomeH2R(): Promise<boolean>;

     /**
     * Hold to run
     * homing motion stop
     *  If getUserHome is false, use HWHome, otherwise use UserHome.
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToHomeH2R()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToHomeStopH2R()}
     *          />
     *      )
     *  }
     */
    moveToHomeStopH2R(): Promise<boolean>;

    /**
     * Hold to run
     * homing motion
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToHWHomeH2R()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToHWHomeStopH2R()}
     *          />
     *      )
     *  }
     */
    moveToHWHomeH2R(): Promise<boolean>;

     /**
     * Hold to run
     * homing motion stop
     *  If getUserHome is false, use HWHome, otherwise use UserHome.
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     */
    moveToHomeStopH2R(): Promise<boolean>;

    /**
     * Hold to run
     * homing motion
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     */
    moveToHWHomeH2R(): Promise<boolean>;

    /**
     * Hold to run
     * homing motion stop
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToHWHomeH2R()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToHWHomeStopH2R()}
     *          />
     *      )
     *  }
     */
    moveToHWHomeStopH2R(): Promise<boolean>;

    /**
     * Hold to run
     * user homing motion
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToUserHomeH2R()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToUserHomeStopH2R()}
     *          />
     *      )
     *  }
     */
    moveToUserHomeH2R(): Promise<boolean>;

    /**
     * Hold to run
     * user homing motion stop
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveToUserHomeH2R()
     *              }}
     *              onTouchEnd={()=>{motionManager.moveToUserHomeStopH2R()}
     *          />
     *      )
     *  }
     */
    moveToUserHomeStopH2R(): Promise<boolean>;

    /**
     * Hold to run
     * (movej) Joint moving function.
     * Moves the robot from the current joint position to the targeted joint position.
     *
     * @param targetPose sets six positions(j1,j2,j3,j4,j5,j6)
     * @param targetVelocity sets velocity. This value can be set for each joint or collectively.
     * @param targetAcceleration sets acceleration. This value can be set for each joint or collectively.
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode. Enumerated constants which means the definition reference about the position to be moved when performing motion control, based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param blendingRadius  sets blend radius
     * - `default` 0
     * @param blendingType sets blend type. enumerated type which means blending speed type of each stop over when performing motion control at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and instead handled based on the targetTime.
     * - In case the following motion is blended with the condition of which blendingType is 0 and blendingRadius is bigger than 0, or in case the remaining motion time which is decided by the remaining distance speed and acceleration of preceding motion is longer than the motion time of following motion, the preceding motion will be terminated after the following motion is terminated.
     *
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, DR_NONE } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveJointH2R([0,0,90,0,90,0], 30, 60, DR_NONE, 0, 0, 0);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveJointH2R(targetPose: SixNumArray, targetVelocity: number|SixNumArray, targetAcceleration: number|SixNumArray, targetTime: number, moveMode: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * Hold to run
     * (movel) linear moving function
     *
     * @param targetPose sets six positions(x,y,z,rz,ry,rx)
     * @param targetVelocity set two velocity (Linear velocity, Rotational velocity)
     * @param targetAcceleration set two acceleration (Linear acceleration, Rotational acceleration)
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode.
     * Enumerated constant which means the definition reference about the position to be moved when performing motion control based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param moveReference sets coordinate.
     * Enumerated constants which means the definition standard about the position to go when the robot controller performs the motion control based on the work space.
     * - 0: Robot base
     * - 1: Robot TCP
     * - `default` 0
     * @param blendingRadius set blend radius
     * - `default` 0
     * @param blendingType set blend type
     * Enumerated constants which means blending speed type of each stopover point when motion control is performed at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, DR_NONE } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveLinearH2R([600,0,1000,0,180,0], [30,30], [60,60], DR_NONE, 0, 0, 0, 0);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveLinearH2R(targetPose: SixNumArray, targetVelocity: TwoNumArray, targetAcceleration: TwoNumArray, targetTime: number, moveMode: number, moveReference: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * Hold to run
     * (movel) linear moving function
     *
     * @param targetPose {@link ManipulatorPose}
     * @param targetVelocity set two velocity (Linear velocity, Rotational velocity)
     * @param targetAcceleration set two acceleration (Linear acceleration, Rotational acceleration)
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode.
     * Enumerated constant which means the definition reference about the position to be moved when performing motion control based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param moveReference sets coordinate.
     * Enumerated constants which means the definition standard about the position to go when the robot controller performs the motion control based on the work space.
     * - 0: Robot base
     * - 1: Robot TCP
     * - `default` 0
     * @param blendingRadius set blend radius
     * - `default` 0
     * @param blendingType set blend type
     * Enumerated constants which means blending speed type of each stopover point when motion control is performed at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, DR_NONE, SolutionSpace, DR_TURN_AUTO, OrientationType, ManipulatorPose } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos = {pose:[600,0,1000,0,180,0],solutionSpace:SolutionSpace.TYPE_AUTO,turnNo:DR_TURN_AUTO,orientationType:OrientationType.ZYX} as ManipulatorPose
     *                  motionManager.moveLinearH2R(pos, [30,30], [60,60], DR_NONE, 0, 0, 0, 0);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveLinearH2R(targetPose: ManipulatorPose, targetVelocity: TwoNumArray, targetAcceleration: TwoNumArray, targetTime: number, moveMode: number, moveReference: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * Hold to run
     * (movejx) Joint moving function from Task Pose.
     * Moves the robot to the target position within the joint area with robot controller. The target position moves same as the movel as it is the location within the workspace. However, because the robot motion acts inside the joint area, the straight path to the target position cannot be guaranteed. Additionally, one of the 8 robot configurations that responds to one work space coordinate, must be assigned to the solutionSpace (solution space).
     *
     * @param targetPose sets six positions(x,y,z,rz,ry,rx)
     * @param solutionSpace sets solution space (0 ~ 7)
     * @param targetVelocity sets velocity .This value can be set for each joint or collectively.
     * @param targetAcceleration sets acceleration. This value can be set for each joint or collectively.
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode.
     * Enumerated constant which means the definition reference about the position to be moved when performing motion control based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param moveReference sets coordinate.
     * Enumerated constants which means the definition standard about the position to go when the robot controller performs the motion control based on the work space.
     * - 0: Robot base
     * - 1: Robot TCP
     * - `default` 0
     * @param blendingRadius sets blend radius
     * - `default` 0
     * @param blendingType sets blend type
     * Enumerated constants which means blending speed type of each stopover point when motion control is performed at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and handled based on the targetTime.
     * - About the path of blending status according to the option blendingType, targetVelocity, and targetAcceleration, refer to the movej () motion description.
     * - When inputting relative motion (moveMode= 1), it cannot be blended to the processing motion, so it is recommended to blend by using amovej () or amovel.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, DR_NONE } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveJointPosxH2R([600,0,1000,0,180,0], 2, 30, 60, DR_NONE, 0, 0, 0, 0);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveJointPosxH2R(targetPose: SixNumArray, solutionSpace: number, targetVelocity: number|SixNumArray, targetAcceleration: number|SixNumArray, targetTime: number, moveMode: number, moveReference: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * Hold to run
     * (movejx) Joint moving function from Task Pose.
     * Moves the robot to the target position within the joint area with robot controller. The target position moves same as the movel as it is the location within the workspace. However, because the robot motion acts inside the joint area, the straight path to the target position cannot be guaranteed. Additionally, one of the 8 robot configurations that responds to one work space coordinate, must be assigned to the solutionSpace (solution space).
     *
     * @param targetPose sets {@link Manipulator}
     * @param targetVelocity sets velocity .This value can be set for each joint or collectively.
     * @param targetAcceleration sets acceleration. This value can be set for each joint or collectively.
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     * @param moveMode sets move mode.
     * Enumerated constant which means the definition reference about the position to be moved when performing motion control based on the work zone at the robot controller.
     * - 0: Absolute
     * - 1: Relative
     * - `default` 0
     * @param moveReference sets coordinate.
     * Enumerated constants which means the definition standard about the position to go when the robot controller performs the motion control based on the work space.
     * - 0: Robot base
     * - 1: Robot TCP
     * - `default` 0
     * @param blendingRadius sets blend radius
     * - `default` 0
     * @param blendingType sets blend type
     * Enumerated constants which means blending speed type of each stopover point when motion control is performed at the robot controller.
     * - 0: Overlays the speed of preceding motion and following motion
     * - 1: Overrides the speed of preceding motion into the speed of following motion
     * - `default` 0
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and handled based on the targetTime.
     * - About the path of blending status according to the option blendingType, targetVelocity, and targetAcceleration, refer to the movej () motion description.
     * - When inputting relative motion (moveMode= 1), it cannot be blended to the processing motion, so it is recommended to blend by using amovej () or amovel.
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, DR_NONE, SolutionSpace, DR_TURN_AUTO, OrientationType, ManipulatorPose } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos = {pose:[600,0,1000,0,180,0],solutionSpace:SolutionSpace.TYPE_AUTO,turnNo:DR_TURN_AUTO,orientationType:OrientationType.ZYX} as ManipulatorPose
     *                  motionManager.moveJointPosxH2R(pos, 30, 60, DR_NONE, 0, 0, 0, 0);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveJointPosxH2R(targetPose: ManipulatorPose, targetVelocity: number|SixNumArray, targetAcceleration: number|SixNumArray, targetTime: number, moveMode: number, moveReference: number, blendingRadius: number, blendingType: number): Promise<boolean>;

    /**
     * Hold to run
     * (align_axis) This function matches the normal vector of the plane consists of Points.
     *
     * @param targetPose1 set point(x,y,z,rz,ry,rx)
     * @param targetPose2 set point(x,y,z,rz,ry,rx)
     * @param targetPose3 set point(x,y,z,rz,ry,rx)
     * @param sourceVector set normal vector
     * @param taskAxis Refer to the Definition of Constant and Enumeration Type
     * @param eTargetRef Refer to the Definition of Constant and Enumeration Type
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, TaskAxis, CoordinateSystem } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos1 = [0,0,0,0,0,0]
     *                  const pos2 = [100,0,0,0,0,0]
     *                  const pos3 = [100,100,0,0,0,0]
     *                  motionManager.moveToAxisWithAlignH2R(pos1, pos2, pos3, TaskAxis.Z, CoordinateSystem.BASE);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveToAxisWithAlignH2R(targetPose1: SixNumArray, targetPose2: SixNumArray, targetPose3: SixNumArray, sourceVector: ThreeNumArray, taskAxis: TaskAxis, targetReference: CoordinateSystem): Promise<boolean>;

    /**
     * Hold to run
     * (parallel_axis) This function matches the normal vector of the plane consists of Points.
     *
     * @param targetPose1 set point(x,y,z,rz,ry,rx)
     * @param targetPose2 set point(x,y,z,rz,ry,rx)
     * @param targetPose3 set point(x,y,z,rz,ry,rx)
     * @param taskAxis Refer to the Definition of Constant and Enumeration Type
     * @param sourceReference Refer to the Definition of Constant and Enumeration Type
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, TaskAxis, CoordinateSystem } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos1 = [0,0,0,0,0,0]
     *                  const pos2 = [100,0,0,0,0,0]
     *                  const pos3 = [100,100,0,0,0,0]
     *                  motionManager.moveParallelToAxisH2R(pos1, pos2, pos3, TaskAxis.Z, CoordinateSystem.BASE);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveParallelToAxisH2R(targetPose1: SixNumArray, targetPose2: SixNumArray, targetPose3: SixNumArray, taskAxis: TaskAxis, sourceReference: CoordinateSystem): Promise<boolean>;

    /**
     * Hold to run
     * (servoj) Joint moving function.
     * Moves the robot from the current joint position to the targeted joint position.
     * Generates the path of moving to corresponding joint position even if the target changes every moment. It is in order to instantly respond to outer environment change during the movement of robot from client to the robot controller.
     *
     * @param targetPose sets six positions(j1,j2,j3,j4,j5,j6)
     * @param targetVelocity sets six velocities(j1,j2,j3,j4,j5,j6)
     * @param targetAcceleration sets six accelerations(j1,j2,j3,j4,j5,j6)
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and instead handled based on the targetTime.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveServoJointH2R([0,0,90,0,90,0], Array.from({length: 6}, () => 10), Array.from({length: 6}, () => 20), DR_NONE);
     *                  setTimeout(() => {
     *                    motionManager.moveServoJointH2R([10,0,90,0,90,10], Array.from({length: 6}, () => 10), Array.from({length: 6}, () => 20), DR_NONE);
     *                  }, 100);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveServoJointH2R(targetPose: SixNumArray, targetVelocity: SixNumArray, targetAcceleration: SixNumArray, targetTime: number): Promise<boolean>;

    /**
     * Hold to run
     * (servol) linear moving function.
     * Moves the robot from the current task position to the targeted task position.
     * Generates the path of moving to corresponding task position even if the target changes every moment. Unlike movel, it is in order to instantly respond to outer environment change during the movement of robot from client to the robot controller.
     *
     * @param targetPose Six Task Space information (unit: mm/deg)
     * @param targetVelocity Two speed information: Maximum Translation speed (mm/sec), Maximum Rotation speed (unit: deg/sec2  )
     * @param targetAcceleration Acceleration information -Two acceleration information: Maximum Translation acceleration, and Maximum Rotation acceleration(unit: deg/sec2  )
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and instead handled based on the targetTime.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, DR_NONE } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  motionManager.moveServoLinearH2R([600,0,1000,0,180,0], [10, 10], [20, 20]), DR_NONE);
     *                  setTimeout(() => {
     *                      motionManager.moveServoLinearH2R([600,100,1000,0,180,0], [10, 10], [20, 20]), DR_NONE);
     *                  }, 100);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveServoLinearH2R(targetPose: SixNumArray, targetVelocity: TwoNumArray, targetAcceleration: TwoNumArray, targetTime: number): Promise<boolean>;

    /**
     * Hold to run
     * (servol) linear moving function.
     * Moves the robot from the current task position to the targeted task position.
     * Generates the path of moving to corresponding task position even if the target changes every moment. Unlike movel, it is in order to instantly respond to outer environment change during the movement of robot from client to the robot controller.
     *
     * @param targetPose {@link ManipulatorPose}
     * @param targetVelocity Two speed information: Maximum Translation speed (mm/sec), Maximum Rotation speed (unit: deg/sec2  )
     * @param targetAcceleration Acceleration information -Two acceleration information: Maximum Translation acceleration, and Maximum Rotation acceleration(unit: deg/sec2  )
     * @param targetTime sets arrival time [sec]. if you want to ignore this parameter, input the number lower then or equal to zero.
     *
     * @return Promise<boolean>
     *
     * **Remarks**
     * - When assigning targetTime, targetVelocity and targetAcceleration are ignored and instead handled based on the targetTime.
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IMotionManager, StopType, DR_NONE, SolutionSpace, DR_TURN_AUTO, OrientationType, ManipulatorPose } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const motionManager = context.getSystemManager(Context.MOTION_MANAGER) as IMotionManager;
     *      return (
     *          <Button
     *              onTouchStart={()=>{
     *                  const pos1 = {pose:[600,0,1000,0,180,0],solutionSpace:SolutionSpace.TYPE_AUTO,turnNo:DR_TURN_AUTO,orientationType:OrientationType.ZYX} as ManipulatorPose
     *                  const pos2 = {pose:[600,100,1000,0,180,0],solutionSpace:SolutionSpace.TYPE_AUTO,turnNo:DR_TURN_AUTO,orientationType:OrientationType.ZYX} as ManipulatorPose
     *                  motionManager.moveServoLinearH2R(pos1, [10, 10], [20, 20]), DR_NONE);
     *                  setTimeout(() => {
     *                      motionManager.moveServoLinearH2R(pos2, [10, 10], [20, 20]), DR_NONE);
     *                  }, 100);
     *              }}
     *              onTouchEnd={()=>{motionManager.moveStop(StopType.SLOW)}
     *          />
     *      )
     *  }
     */
    moveServoLinearH2R(targetPose: ManipulatorPose, targetVelocity: TwoNumArray, targetAcceleration: TwoNumArray, targetTime: number): Promise<boolean>;

    /**
     * Set the latency mode of motion
     *
     * @param mode 0:setting, 1:non-setting
     * @return Promise<boolean>
     *
     * @api-version 1
     * @user
     * @deprecated Do not use in Module.
     */
    setTrajectoryEndMode(mode: number): Promise<boolean>;
}

/**
 * system variable type
 *
 * @enum
 * @api-version 1
 * @user
 */
export const SystemVariableType = {
    /**
     * Boolean
     *
     * @api-version 1
     * @user
     */
    BOOLEAN: 0,
    /**
     * Integer
     *
     * @api-version 1
     * @user
     */
    INTEGER: 1,
    /**
     * Float
     *
     * @api-version 1
     * @user
     */
    FLOAT: 2,
    /**
     * String
     *
     * @api-version 1
     * @user
     */
    STRING: 3,
    /**
     * Posj
     *
     * @api-version 1
     * @user
     */
    POSJ: 4,
    /**
     * Posx
     *
     * @api-version 1
     * @user
     */
    POSX: 5,
    /**
     * List
     *
     * @api-version 1
     * @user
     */
    LIST: 6,
    /**
     * Unknown
     *
     * @api-version 1
     * @user
     */
    UNKNOWN: 7
} as const;
/**
 * @ignore
 */
export type SystemVariableType = typeof SystemVariableType[keyof typeof SystemVariableType];

/**
 * System Variable
 *
 * @api-version 1
 * @user
 */
export type SystemVariable = {
    /**
     * name of system variable
     * @api-version 1
     * @user
     */
    name: string;

    /**
     * type of system variable
     * @api-version 1
     * @user
     */
    type: SystemVariableType;

    /**
     * value of system variable
     * @api-version 1
     * @user
     */
    value: string;
};

/**
 * IPositionManager have position setting api in Robot.
 * For example, setting coordinate, get current position etc...
 *
 * @api-version 1
 * @user
 */
export interface IPositionManager extends ISystemManager {
    /**
     * {@link Monitorable} CurrentPoses.
     *
     * @api-version 1
     * @user
     */
    readonly poses: Monitorable<{ jointPose: SixNumArray, flangePosition: SixNumArray, toolPosition: SixNumArray, solutionSpace: SolutionSpace }>;

    /**
     * {@link Monitorable} current joint pose.
     *
     * This value is not updated when module is not visible
     *
     * @api-version 1
     * @user
     */
    readonly jointPose: Monitorable<SixNumArray>;

    /**
     * {@link Monitorable} current joint velocity.
     *
     * This value is not updated when module is not visible
     *
     * @api-version 2
     * @user
     */
    readonly jointVelocity: Monitorable<SixNumArray>;

    /**
     * {@link Monitorable} target joint pose
     *
     * This value is not updated when module is not visible
     *
     * @api-version 2
     * @user
     */
    readonly targetJointPose: Monitorable<SixNumArray>;

     /**
      * {@link Monitorable} target joint velocity.
      *
      * This value is not updated when module is not visible
      *
      * @api-version 2
      * @user
      */
    readonly targetJointVelocity: Monitorable<SixNumArray>;

    /**
     * {@link Monitorable} flangePosition.
     *
     * This value is not updated when module is not visible
     *
     * @api-version 1
     * @user
     */
    readonly flangePosition: Monitorable<SixNumArray>;

    /**
     * {@link Monitorable} current tool position.
     *
     * This value is not updated when module is not visible
     *
     * @api-version 1
     * @user
     */
    readonly toolPosition: Monitorable<SixNumArray>;

    /**
     * {@link Monitorable} current tool velocity.
     *
     * This value is not updated when module is not visible
     *
     * @api-version 2
     * @user
     */
    readonly toolVelocity: Monitorable<SixNumArray>;

    /**
     * {@link Monitorable} target tool position.
     *
     * This value is not updated when module is not visible
     *
     * @api-version 2
     * @user
     */
    readonly targetToolPosition: Monitorable<SixNumArray>;

    /**
     * {@link Monitorable} target tool velocity.
     *
     * This value is not updated when module is not visible
     *
     * @api-version 2
     * @user
     */
    readonly targetToolVelocity: Monitorable<SixNumArray>;

    /**
     * {@link Monitorable} Current tcp pose w.r.t Base, World, and Active User coordinate systems
     *
     * This value is not updated when module is not visible
     *
     * @api-version 1
     * @user
     */
    readonly currentTCPPose: Monitorable<TCPPoseInfo>;

    /**
     * {@link Monitorable} robot configuration number. (0 ~ 7)
     *
     * @api-version 1
     * @user
     */
    readonly solutionSpace: Monitorable<SolutionSpace>;

    /**
     * {@link Monitorable} The degree of singularity risk. Below 0.1 there is a risk of singularity.
     *
     * @api-version 1
     * @user
     */
    readonly singularityRiskLevel : Monitorable<number>;
    /**
     * Get Current Pose
     *
     * @param eSpaceType RobotSpace(Joint: 0, Task: 1)
     * @return Promise<SixNumArray> get current joint/task pose (J1, J2, J3, J4, J5, J6)/(X, Y, Z, RZ, RY, RX)
     *
     * @api-version 1
     * @user
     */
    getCurrentPos(eSpaceType: RobotSpace): Promise<SixNumArray>

    /**
     * Get Current Joint Pose
     *
     * @return Promise<SixNumArray> get current joint pose (J1, J2, J3, J4, J5, J6)
     *
     * @api-version 1
     * @user
     */
    getCurrentPosJ(): Promise<SixNumArray>

    /**
     * Get Current Task Pose and Solution space
     *
     * @return Promise<TaskPose> get current task pose (X, Y, Z, RZ, RY, RX), Solution Space
     *
     * @api-version 1
     * @user
     */
    getCurrentPosX(reference: CoordinateSystem): Promise<TaskPose>

    /**
     * Get current manipulator pose.
     *
     * @param reference The reference coordinate of task space pose values
     * @param orientationType The OrientatioType of result. If not set, it is {@link OrientationType.EULER_ZYX}
     *
     * @return Promise<ManipulatorPose> get current manipulator pose
     *
     * @api-version 2
     * @user
     */
    getCurrentManipulatorPosx(reference: CoordinateSystem, orientationType?:OrientationType): Promise<ManipulatorPose>

    /**
     * Get Current Tool Position
     *
     * @return SixNumArray get current Tool Position (X, Y, Z, RZ, RY, RX)
     *
     * @api-version 1
     * @user
     */
    getToolPos(): SixNumArray

    /**
     * Get TCP pose w.r.t Base, World, and Active User coordinate systems
     * This value is the same as the monitoring variable currentTCPose.
     *
     * @return Return <Promise> Fulfills with the {@link TCPPoseInfo}.
     *
     * @api-version 1
     * @user
     */
    getCurrentTCPPoseInformation(): TCPPoseInfo;

    /**
     * Gets Current Solution Space.
     * Calculates the solution space value.
     *
     * @return robot configuration number. (0 ~ 7)
     *
     * **Remarks**
     * - Solution Space : There are 8 ways to place robot TCP to on a Cartesian position. This is called Solution Space of Robot.
     *
     * @api-version 1
     * @user
     */
    getSolutionSpace(): SolutionSpace

    /**
    * Calculate robot task space pose using joint space pose.
    *
    * @param sourcePose task space pose values
    * @param solutionSpace robot configuration number. (0 ~ 7)
    * @param targetReference The reference coordinate of task space pose values(input values)
    *
    * @return robot joint space pose values
    *
    * @api-version 1
    * @user
    */
    inverseKinematics(sourcePose: SixNumArray, solutionSpace: SolutionSpace, targetReference: CoordinateSystem): Promise<SixNumArray>

    /**
    * Calculate robot task space pose using joint space pose.
    *
    * @param sourcePose task space pose values
    * @param targetReference The reference coordinate of task space pose values(input values)
    * @param initialPoseOption When creating a multi-turn solution, select a solution close to the reference position according to the option. 0: Based on posj(0,0,0,0,0,0) position, 1: Based on current joint angle position. If not set, it is 1.
    *
    * @return robot joint space pose values
    *
    * @api-version 2
    * @user
    */
    inverseKinematicsEx(sourcePose: ManipulatorPose, targetReference: CoordinateSystem, initialPoseOption?:0|1): Promise<SixNumArray>

    /**
     * Calculate robot joint space pose using task space pose.
     *
     * @param sourcePose joint space pose values
     * @param eTargetRef The reference coordinate of task space pose values(return values)
     *
     * @return robot task space pose values
     *
     * @api-version 1
     * @user
     */
    forwardKinematics(sourcePose: SixNumArray, targetReference:CoordinateSystem): Promise<SixNumArray>

    /**
     * Calculate robot joint space pose using task space pose.
     *
     * @param sourcePose joint space pose values
     * @param eTargetRef The reference coordinate of task space pose values(return values)
     * @param orientationType The OrientatioType of result. If not set, it is {@link OrientationType.EULER_ZYX}
     *
     * @return robot task space pose values {@link ManipulatorPose}
     *
     * @api-version 2
     * @user
     */
    forwardKinematicsEx(sourcePose: SixNumArray, targetReference:CoordinateSystem, orientationType?:OrientationType): Promise<ManipulatorPose>

    /**
     * Get Current Flange Position
     *
     * @return SixNumArray get current Flange Position (X, Y, Z, RZ, RY, RX)
     *
     * @api-version 1
     * @user
     */
    getFlangePos(): SixNumArray

    /**
     * Gets the point of the pallet corresponding to the index.
     * Calculates the corresponding Pallet Point of Index. Pallet Point is the point which comes under Index. The Index fits to the pattern with assigned Pallet Size(Row X Column) by using given-four points.
     * @param position1 1st position
     * @param position2 2nd position
     * @param position3 3rd position
     * @param position4 4th position
     * @param pattern {@link PatternType}
     * @param index index of points
     * @param row Row
     * @param column Column
     * @param stack level of Layer
     * @param thickness 4th position
     * @param offsetValue offset for place position(X, Y, Z)
     *
     * @return Promise<SixNumArray> Point of index  (X, Y, Z, RZ, RY, RX)
     * Delivers the position information of joint zone which is calculated via the given 위치 information and offset information. This is a response to the calculation request on workzone position information.
     *
     * **Remarks**
     * - Offset is the value to be applied when placing it.
     *
     * @api-version 1
     * @user
     */
    getPatternPoint(position1: SixNumArray, position2: SixNumArray, position3: SixNumArray, position4: SixNumArray, pattern: PatternType, index: number, row: number, column: number, stack: number, thickness: number, offsetValue: ThreeNumArray): Promise<SixNumArray>


    /**
     * Convert targetPose with respect to inputReference to the task coordinate with respect to outputReference.
     * @param targetPose The pose w.r.t inputReference
     * @param inputReference The reference coordinate system for targetPose.
     * @param outputReference The reference coordinate system for calculated pose.
     *
     * @return Promise<SixNumArray> The pose w.r.t outputReference (X, Y, Z, RZ, RY, RX)
     *
     * @api-version 1
     * @user
     */
    coordTransform(targetPose: SixNumArray, inputReference:CoordinateSystem, outputReference: CoordinateSystem): Promise<SixNumArray>;

    /**
     * Convert targetPose to the task coordinate with respect to outputReference.
     *
     * @param targetPose The pose
     * @param inputReference The reference coordinate system for targetPose.
     * @param outputReference The reference coordinate system for calculated pose.
     * @param orientationType The OrientatioType of result. If not set, it is {@link OrientationType.EULER_ZYX}
     *
     * @return Promise<ManipulatorPose> The calculated pose
     *
     * @api-version 2
     * @user
     */
    coordTransform(targetPose: ManipulatorPose, inputReference:CoordinateSystem, outputReference: CoordinateSystem, orientationType?: OrientationType): Promise<ManipulatorPose>;

    /**
     * Get CalculateCoordinate in Robot Parameters
     *
     * @return Promise<SixNumArray> or null
      *
     * @api-version 1
     * @user
     */
    calculateCoordinate(data: CalculateCoordinate): Promise<SixNumArray | null>;

    /**
     * "description": "Offset sourcePose by offset with respect to sourceReference coordinate system. and Convert Offseted pose with respect to sourceReference to the pose with respect to targetReference.",
     * @param sourcePose The pose w.r.t sourceReference
     * @param offset The offset w.r.t sourceReference
     * @param sourceReference The reference coordinate system for sourcePose.
     * @param targetReference The reference coordinate system for calculated pose.
     *
     * @return Promise<SixNumArray> The calculated pose w.r.t targetReference (X, Y, Z, RZ, RY, RX)
     *
     * @api-version 1
     * @user
     */
    trans(sourcePose: SixNumArray, offset: SixNumArray, sourceReference: CoordinateSystem, targetReference: CoordinateSystem): Promise<SixNumArray>;

    /**
     * "description": "Offset sourcePose by offset. and Convert Offseted pose is with respect to targetReference.",
     * @param sourcePose The pose
     * @param offset The offset
     * @param targetReference The reference coordinate system for calculated pose.
     * @param orientationType The OrientatioType of result. If not set, it is {@link OrientationType.EULER_ZYX}
     *
     * @return Promise<ManipulatorPose> The calculated pose
     *
     * @api-version 2
     * @user
     */
    trans(sourcePose: ManipulatorPose, offset: ManipulatorPose, sourceReference: CoordinateSystem, targetReference: CoordinateSystem, orientationType?:OrientationType): Promise<ManipulatorPose>;

     /**
     * get base to target coordinate relationship.
     * @param target
     *
     * @return Promise<SixNumArray> The base to target (X, Y, Z, RZ, RY, RX)
     *
     * @api-version 1
     * @user
     */
    getBaseToCoordinate(target: CoordinateSystem): SixNumArray | null;
}

/**
 * General Range in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type GeneralRange = {
    /**
     * Robot parameter range in normal mode.
     *
     * @api-version 1
     * @user
     */
    normal: {
        maxForce: number;
        maxPower: number;
        maxSpeed: number;
        maxMomentum: number;
    };
    /**
     * Robot parameter range in reduced mode.
     *
     * @api-version 1
     * @user
     */
    reduced: {
        maxForce: number;
        maxPower: number;
        maxSpeed: number;
        maxMomentum: number;
    };
};

/**
 * Joint Range in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type JointRange = {
    /**
     * Joint parameter range in normal mode.
     *
     * @api-version 1
     * @user
     */
    normal: {
        maxRange: SixNumArray;
        maxVelocity: SixNumArray;
        minRange: SixNumArray;
    };
    /**
     * Joint parameter range in reduced mode.
     *
     * @api-version 1
     * @user
     */
    reduced: {
        maxRange: SixNumArray;
        maxVelocity: SixNumArray;
        minRange: SixNumArray;
    };
};

/**
 * Safety Stop Mode in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type SafetyStopMode = {
    /**
     * Safety stop modes.
     *
     * @api-version 1
     * @user
     */
    stopCode: [
        0,
        0,
        0,
        0,
        EmergencyStop,
        ProtectiveStop,
        0,
        JointAngleLimitViolation,
        JointSpeedLimitViolation,
        JointTorqueLimitViolation,
        CollisionDetection,
        TcpRobotPositionLimitViolation,
        TcpOrientationLimitViolation,
        TcpSpeedLimitViolation,
        TcpForceLimitViolation,
        MomentumLimitViolation,
        MechanicalPowerLimitViolation
    ];
};
/**
 * Safe Torque Off
 * The power is immediately removed from all joint module motors, on demand.
 *
 * @api-version 1
 * @user
 */
export type STO = 0;
/**
 * Safe Stop 1
 * After monitoring the deceleration of all joint module motors throughout the <predefined deceleration time>, the power is removed from the motors, on demand.
 *
 * @api-version 1
 * @user
 */
export type SS1 = 2;
/**
 * Safe Stop 2
 * After monitoring the deceleration of all the joint module motors throughout the <predefined deceleration time>, SOS is performed, on demand, while keeping the motors supplied with power.
 *
 * @api-version 1
 * @user
 */
export type SS2 = 3;
/**
 * Reflex Stop 1
 * 충돌이 감지되면 플로팅 리액션(Floating Reaction: 충돌 감지이후 잠시 외력에 순응하는 기능)을 이용하여 외력에 반응한 후 로봇을 멈추고 SOS(Safe Operating Stop)로 전환됩니다.
 *
 * @api-version 1
 * @user
 */
export type RS1 = 4;
/**
 * Emergency Stop Mode
 *
 * @api-version 1
 * @user
 */
export type EmergencyStop = STO | SS1;
/**
 * Protective Stop Mode
 *
 * @api-version 1
 * @user
 */
export type ProtectiveStop = SS1 | SS2;
/**
 * Joint Angle Limit Violation Stop Mode
 *
 * @api-version 1
 * @user
 */
export type JointAngleLimitViolation = STO | SS1 | SS2;
/**
 * Joint Speed Limit Violation Stop Mode
 *
 * @api-version 1
 * @user
 */
export type JointSpeedLimitViolation = STO | SS1 | SS2;
/**
 * Joint Torque Limit Violation Stop Mode
 *
 * @api-version 1
 * @user
 */
export type JointTorqueLimitViolation = STO;
/**
 * Collision Detection Stop Mode
 *
 * @api-version 1
 * @user
 */
export type CollisionDetection = STO | SS1 | SS2 | RS1;
/**
 * Tcp Position Limit Violation Stop Mode
 *
 * @api-version 1
 * @user
 */
export type TcpRobotPositionLimitViolation = STO | SS1 | SS2;
/**
 * Tcp Orientation Limit Violation Stop Mode
 *
 * @api-version 1
 * @user
 */
export type TcpOrientationLimitViolation = STO | SS1 | SS2;
/**
 * Tcp Speed Limit Violation Stop Mode
 *
 * @api-version 1
 * @user
 */
export type TcpSpeedLimitViolation = STO | SS1 | SS2;
/**
 * Tcp Force Limit Violation Stop Mode
 *
 * @api-version 1
 * @user
 */
export type TcpForceLimitViolation = STO | SS1 | SS2 | RS1;
/**
 * Momentum Limit Violation Stop Mode
 *
 * @api-version 1
 * @user
 */
export type MomentumLimitViolation = STO | SS1 | SS2;
/**
 * Mechanical Power Limit Violation Stop Mode
 *
 * @api-version 1
 * @user
 */
export type MechanicalPowerLimitViolation = STO | SS1 | SS2;

/**
 * cockpit button state
 *
 * @api-version 1
 * @user
 */
export type CockpitButtons = {
    /**
     * cockpit 'left' button state
     *
     * @api-version 1
     * @user
     */
    left:{ pressed: boolean},
    /**
     * cockpit 'right' button state
     *
     * @api-version 1
     * @user
     */
    right:{ pressed: boolean},
    /**
     * cockpit 'get-Pose' button state
     *
     * @api-version 1
     * @user
     */
    getPose:{ pressed: boolean},
    /**
     * cockpit 'direct-teach' button state
     *
     * @api-version 1
     * @user
     */
    directTeach:{ pressed: boolean},
    /**
     * 5-button cockpit 'back' button state
     *
     * @api-version 1
     * @user
     */
    back:{ pressed: boolean},
    /**
     * 6-button cockpit 'row-up' button state
     *
     * @api-version 1
     * @user
     */
    rowUp:{ pressed: boolean},
    /**
     * 6-button cockpit 'row-down' button state
     *
     * @api-version 1
     * @user
     */
    rowDown:{ pressed: boolean},
};

/**
 * Servo state.
 *
 * @api-version 2
 * @user
 */
export const ServoState = {
    /**
     * Turned off.
     *
     * @api-version 2
     * @user
     */
    OFF: 0,
    /**
     * Turning on.
     *
     * @api-version 2
     * @user
     */
    TURNING_ON: 1,
    /**
     * Turned on.
     *
     * @api-version 2
     * @user
     */
    ON: 2,
    /**
     * Turning off.
     *
     * @api-version 2
     * @user
     */
    TURNING_OFF: 3
} as const;
/**
 * @ignore
 */
export type ServoState = typeof ServoState[keyof typeof ServoState];

/**
 * IRobotManager have APIs which are related with Robot.
 * For example, get connected robot model information, whether it is connected with real robot or not, etc...
 *
 * @api-version 1
 * @user
 */
export interface IRobotManager extends ISystemManager {
    /**
     * {@link Monitorable} a system version information.
     *
     * @api-version 1
     * @system
     */
    readonly sysVersion: Monitorable<SystemVersionInfo>;

    /**
     * {@link Monitorable} flange hardware version
     *
     * @api-version 2
     * @user
     */
    readonly flangeHardwareVersion: Monitorable<FlangeHardwareVersion>;

    /**
     * {@link Monitorable} Connection State. true:connect, false:disconnect
     *
     * @api-version 1
     * @user
     */
    readonly connectionState: Monitorable<boolean>;

    /**
     * {@link Monitorable} Whether mastering is required.
     *
     * @api-version 1
     * @user
     */
    readonly needMastering: Monitorable<boolean>;

    /**
     * {@link Monitorable} Collision Sensitivity (percentage)
     *
     * @api-version 1
     * @user
     */
    readonly sensitivityCollision: Monitorable<number>;

    /**
     * {@link Monitorable}
     * cockpit button state
     *
     * @api-version 1
     * @user
     */
    readonly cockpitButtons: Monitorable<CockpitButtons>;

    /**
     * {@link Monitorable} Power button state.
     *
     * @api-version 1
     * @user
     */
    readonly powerButton: Monitorable<boolean>;

    /**
     * {@link Monitorable} Response to the sent command (packet).
     *
     * @api-version 1
     * @user
     */
    readonly responseCommand: Monitorable<number>;

    /**
     * {@link Monitorable}
     * External force information based on the user coordinate system
     *
     * @api-version 1
     * @user
     */
    readonly userCoordExtForce: Monitorable<{ userId: number, externalForce: SixNumArray }[]>;

    /**
     * {@link Monitorable}
     * Whether TP initialization is complete
     *
     * @api-version 1
     * @user
     */
    readonly isTPInitializingCompleted: Monitorable<boolean>;

    /**
     * {@link Monitorable}
     * {@link ExternalForceMonitoringData}
     * External force data of tcp based on the coordinate system set using the setExternalForceMonitoringTarget api.
     *
     * @api-version 1
     * @user
     */
    readonly targetExternalForceMonitoring: Monitorable<ExternalForceMonitoringData>;

    /**
     * {@link Monitorable}
     * {@link SixNumArray}
     * External Joint Torque data
     *
     * @api-version 3
     * @user
     */
    readonly externalJointTorque: Monitorable<SixNumArray>;

    /**
     * {@link Monitorable}
     * RobotParameter checksum value for robot controller both normal and safety data and status
     * normal data : cockpit, user coordinates, normal input&output
     * safety data : robot limits, safety stop mode, safety input&output, safety zone, tool center position, tool weight, tool shape, mount pose, nudge, world coordinate
     * checksum : normal and safety data checksum of robot parameter data set on controller
     * state : robot parameter file checksum is matched with robot parameter data set on controller
     * 0: state of matched normal & safety data
     * 1: state of unmatched normal data state
     * 2: state of unmatched safety data
     *
     * @api-version 1
     * @user
     */
    readonly robotChecksum: Monitorable<{checksum: string, state: ChecksumState}>;

    /**
     * {@link Monitorable}
     * robot motion speed. 0 to 100%
     *
     * @api-version 1
     * @user
     */
    readonly operationSpeed:Monitorable<number>;

    /**
     * {@link Monitorable} {@link RobotState}.
     *
     * @api-version 1
     * @user
     */
    readonly robotState: Monitorable<RobotState>;

    /**
     * {@link Monitorable} {@link SafetyMode}.
     *
     * @api-version 1
     * @user
     */
    readonly safetyMode: Monitorable<SafetyMode>;

    /**
     * {@link Monitorable} {@link SafetyState}.
     *
     * @api-version 1
     * @user
     */
    readonly safetyState: Monitorable<SafetyState>;

    /**
     * {@link Monitorable} Servo state. True if robot's servo on, otherwise false.
     *
     * @api-version 1
     * @user
     */
    readonly servoState: Monitorable<boolean>;

    /**
     * {@link Monitorable} for representing servo state as {@link ServoState}.
     *
     * @api-version 2
     * @user
     */
    readonly servoDetailState: Monitorable<ServoState>;

    /**
     * {@link Monitorable} {@link RobotSystem}.
     *
     * @api-version 1
     * @user
     */
    readonly robotSystem: Monitorable<RobotSystem>;

    /**
     * {@link Monitorable} {@link RobotType}.
     *
     * @api-version 2
     * @user
     */
    readonly robotType: Monitorable<RobotType>;

    /**
     * {@link Monitorable} alarm data.
     *
     * @api-version 1
     * @user
     */
    readonly logAlarm: Monitorable<LogAlarm>;

    /**
     * {@link Monitorable} safety stop type.
     *
     * @api-version 1
     * @user
     */
    readonly safetyStopType: Monitorable<SafetyStopType>;

    /**
     * {@link Monitorable} protective safe off.
     * protective Stop 일 때 Safe Off 되는 경우에 대한 Event 발생 ( SS1, STO 일 경우에 발생 한다 )
     *
     * @api-version 1
     * @user
     */
    readonly protectiveSafeOff: Monitorable<boolean>;

    /**
     * {@link Monitorable}
     * Indicates the state transition in the following two cases.
     * 1. In case of an emergency, the combination of the Cockpit button converts the Safety Stop state to the Recovery Mode Direct Teaching state.
     * 2. Entering back drive mode in Safe-Off state and forcibly switching to brake automatic release state.
     *
     * @api-version 1
     * @user
     */
    readonly modeChanged: Monitorable<ModeChangeState>;
    /**
     * {@link Monitorable}
     * Changed when the remote control mode is changed. If true, remote control mode.
     * It changes to true when receiving the start input signal from the remote control ready state.({@link remoteControlReadyModeChanged})
     *
     * @api-version 1
     * @user
    */
    readonly remoteControlModeChanged: Monitorable<boolean>;

    /**
     * {@link Monitorable} Notify that signal information has changed to I/O mapped to Remote Control command
     *
     * @api-version 1
     * @user
    */
    readonly remoteControlCommand: Monitorable<RemoteControlCommand>;

    /**
     * {@link Monitorable}
     * Changed when the remote control ready mode is changed. If true, remote control ready mode.
     * It is the same value as the return value of the {@link setRemoteControl} method.
     * Used for state synchronization in Dart-Platform without control.
     *
     * @api-version 2
     * @user
    */
    readonly remoteControlReadyModeChanged: Monitorable<boolean>;

    /**
     * {@link Monitorable} 3PE Switch availability and state.
     *
     * @api-version 2
     * @user
     */
    readonly pos3EnableSwitch: Monitorable<Pos3EnableSwitch>;

    /**
     * {@link Monitorable}
     * workpiece weight mode. {@link WorkpieceWeightMode}
     *
     * @api-version 3
     * @user
     */
    readonly workpieceWeightMode: Monitorable<WorkpieceWeightMode>;

    /**
     * {@link Monitorable} Controller Network Information
     *
     * @api-version 3
     * @system
     */
    readonly controllerNetworkInfo: Monitorable<SystemIpAddress>;

    /**
     * Robot servo on function
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const servoStateCallback = (state: boolean) => Toast.show(IToast.TYPE_INFO, null, `servoState: ${state}`);
     *          robotManager.servoState.register(context, servoStateCallback);
     *          robotManager.servoOn();
     *          return () => { robotManager.servoState.unregister(context, servoStateCallback);};
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    servoOn(): Promise<boolean>;

    /**
     * Robot servo off function
     * Turns off the motor and the break at the robot controller. Quick stop(maintains the trajectory of the motion)
     *
     * @return Promise<boolean>
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const servoStateCallback = (state: boolean) => Toast.show(IToast.TYPE_INFO, null, `servoState: ${state}`);
     *          robotManager.servoState.register(context, servoStateCallback);
     *          robotManager.servoOn();
     *          return () => { robotManager.servoState.unregister(context, servoStateCallback);};
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    servoOff(): Promise<boolean>;

    /**
     * Get Servo State
     *
     * @return boolean (ServoOn: true, ServoOff: false)
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      const [servoState, setServoState] = useState<boolean>(false);
     *
     *      useEffect(() => {
     *          const servoStateCallback = (state: boolean) => setServoState(state);
     *          robotManager.servoState.register(context, servoStateCallback, true);
     *          robotManager.servoOn();
     *          return () => { robotManager.servoState.unregister(context, servoStateCallback);};
     *      }, []);
     *
     *      useEffect(() => {
     *           Toast.show(IToast.TYPE_INFO, null, `servoState: ${robotManager.isServoOn()}`);
     *      }, [servoState]);
     *    return <>Please implement your code here.</>
     *  }
     */
    isServoOn(): boolean;

    /**
     * Sets up the Robot System to Real or Virtual.
     *
     * @param robotSystem set Robot System Mode (Real: 0, Virtual: 1)
     * @return Promise<boolean>
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, RobotSystem } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const callback = (value: RobotSystem) => Toast.show(IToast.TYPE_INFO, null, `robotSystem: ${value}`);
     *          robotManager.robotSystem.register(context, callback, true);
     *          robotManager.setRobotSystem(RobotSystem.VIRTUAL);
     *          return () => { robotManager.robotSystem.unregister(context, callback);};
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    setRobotSystem(robotSystem: RobotSystem): Promise<boolean>;

    /**
     * Gets the Robot System is in Real or Virtual.
     * @return Promise<RobotSystem> (Real: 0, Virtual: 1)
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, RobotSystem } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          robotManager.getRobotSystem()
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `robotSystem: ${r}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getRobotSystem(): Promise<RobotSystem>;

    /**
     * Get current robot state
     *
     * @return RobotState
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, RobotState } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          robotManager.getRobotState()
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `robotState: ${r}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getRobotState(): RobotState;

    /**
     * Sets Robot Mode.
     *
     * @param mode set Robot System Mode (Real: 0, Virtual: 1)
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, RobotMode } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const callback = (value: RobotMode) => Toast.show(IToast.TYPE_INFO, null, `robotMode: ${value}`);
     *          robotManager.robotMode.register(context, callback, true);
     *          robotManager.setRobotMode(RobotMode.AUTO);
     *          return () => { robotManager.robotMode.unregister(context, callback);};
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    setRobotMode(mode: RobotMode): Promise<boolean>;

    /**
     * Gets current robot mode.
     * Auto mode is the mode to automatically perform motion program, and manual mode is the mode to perform single motion such as jog.
     *
     * @return Return <Promise> Fulfills with the {@link RobotMode}.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, RobotMode } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          robotManager.getRobotMode()
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `robotMode: ${r}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getRobotMode(): Promise<RobotMode>;

    /**
     * Sets up the Safety Mode for each safety function to be performed.
     * @param safetyMode sets Safety Mode (MANUAL: 0, AUTO: 1, RECOVERY: 2, BACK_DRIVE: 3, MEASURING: 4, INITIAL: 5)
     * @param safetyEvent sets Safety Mode Event (ENTER: 0, MOVE: 1, STOP: 2)
     * @return RobotState
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, SafetyMode, SafetyModeEvent } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const callback = (value: SafetyMode) => Toast.show(IToast.TYPE_INFO, null, `safetyMode: ${value}`);
     *          robotManager.safetyMode.register(context, callback, true);
     *          robotManager.setSafetyMode(SafetyMode.AUTO, SafetyModeEvent.ENTER);
     *          return () => { robotManager.safetyMode.unregister(context, callback);};
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    setSafetyMode(safetyMode: SafetyMode, safetyEvent: SafetyModeEvent): Promise<boolean>

    /**
     * Get current safety mode
     *
     * @return SafetyMode
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, SafetyMode } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          robotManager.getSafetyMode()
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `safetyMode: ${r}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getSafetyMode(): SafetyMode;

    /**
     * Get current safety state
     *
     * @return SafetyState
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, SafetyState } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          robotManager.getSafetyState()
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `safetyState: ${r}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>

     *  }
     */
    getSafetyState(): SafetyState;

    /**
     * Get LogAlarm Message
     *
     * @param log system alarm log data
     * @return alarm log message
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const callback = (value: LogAlarm) => Toast.show(IToast.TYPE_INFO, null, `logAlarm: ${robotManager.getLogAlarmMessage(value)}`);
     *          robotManager.logAlarm.register(context, callback, true);
     *          return () => { robotManager.logAlarm.unregister(context, callback);};
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getLogAlarmMessage(log: LogAlarm): string;

    /**
     * Get LogAlarm List
     *
     * @param startDate start Date
     * @param endDate end Date
     * @return LogAlarm list
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, LogAlarm } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const logs = robotManager.getLogAlarms(new Date(2024, 1, 1), Data.now());
     *          logs.forEach(log => Toast.show(IToast.TYPE_INFO, null, log.message));
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getLogAlarms(startDate?: Date, endDate?: Date): { logDate: Date; log?: LogAlarm; message: string }[];

    /**
     * Set the remote control function to the general digital I/O mounted on the control box.
     *
     * @param enable Whether use (1) or not to use (0)
     * @param inputPortMappedFunction Remote control input information.
     *        - Servo On: 0
     *        - Start Program: 1
     *        - Program Stop: 2
     *        - Program Pause: 3
     *        - Restart program: 4
     *        - Power on: 5
     *        - Power off: 6
     * @param outputPortMappedFunction Remote control output setting
     *        - STO state: 0
     *        - SOS Status: 1
     *        - EMG Status: 2
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @system
     */
    setRemoteControl(enable: number, inputPortMappedFunction: ConfigIoFunctionList, outputPortMappedFunction: ConfigIoFunctionList): Promise<boolean>;

    /**
     * Get Controller Serial Number
     *
     * @return Controller Serial number (string)
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const serialNo = robotManager.getControllerSerialNumber();
     *          Toast.show(IToast.TYPE_INFO, null, `serialNo: ${serialNo}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getControllerSerialNumber(): string

    /**
     * Get controller IP Address
     * @param usage 0: internal 1: external
     * @return Promise<boolean> return true if ip query succeeds, false if unsuccessful.
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, SystemIpUsage, SystemIpAddress } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const ipAddress = robotManager.getIpAddress(SystemIpUsage.EXTERNAL);
     *          Toast.show(IToast.TYPE_INFO, null, `ipAddress: ${ipAddress}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getIpAddress(usage: SystemIpUsage): Promise<SystemIpAddress>;

    /**
     * Set controller IP Address
     * @param systemIp ip address to change
     * @return Promise<boolean> returns true if ip change succeeds, false if unsuccessful.
     *
     * @api-version 1
     * @system
     */
    setIpAddress(systemIp: SystemIpAddress): Promise<boolean>;

    /**
     * Get controller IP Address
     * @return Promise<boolean> return true if ip query succeeds, false if unsuccessful.
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, SystemIpAddress } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          robotManager.getControllerIpAddress()
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `SystemIpAddress: ${JSON.stringify(r)}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getControllerIpAddress(): Promise<SystemIpAddress>;

    /**
     * Brake control for non-motorized operation in backdrive mode.
     * @param data Joint Axis to be controlled and brake Enable.
     * @return Promise<boolean> returns true if ip change succeeds, false if unsuccessful.
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, ControlBrake } from "dart-api";
     *  import { Button } from "@mui/material";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      return (
     *          <Button
     *              onClick={()=>{robotManager.controlBrake({targetAxis:0, value:0} as ControlBrake)}}
     *          />
     *      )
     *  }
     */
    controlBrake(data: ControlBrake): Promise<boolean>;

    /**
     * Get model name of connected robot
     *
     * @return string the robot model name
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const result = robotManager.getRobotModel();
     *          Toast.show(IToast.TYPE_INFO, null, `${result}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getRobotModel(): string

    /**
     * Get robot series of connected robot
     *
     * @return Robot series
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, RobotSeries } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const result = robotManager.getRobotSeries();
     *          Toast.show(IToast.TYPE_INFO, null, `${result}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getRobotSeries(): RobotSeries;

    /**
     * Get state about connection with real robot.
     *
     * @return boolean return true when connected with real robot.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const result = robotManager.isRobotConnected();
     *          Toast.show(IToast.TYPE_INFO, null, `${result}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    isRobotConnected(): boolean

    /**
     * Get serial number of connected robot
     *
     * @return string the robot serial number
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const result = robotManager.getRobotSerialNumber();
     *          Toast.show(IToast.TYPE_INFO, null, `${result}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getRobotSerialNumber(): string

    /**
     * Get system variable list
     *
     * @return System Variable list {@link SystemVariable}
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, SystemVariable } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const result = robotManager.getSystemVariables();
     *          Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(result)}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getSystemVariables():Promise<SystemVariable[]>;

    /**
     * Get flange version
     *
     * @return Return <Promise> Fulfills with the {@link FlangeVersion}.
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, FlangeVersion } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const result = robotManager.getFlangeVersion();
     *          Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(result)}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getFlangeVersion(): Promise<FlangeVersion>;

    /**
     * Updating the firmware of the currently operating sub-controller, inverter, and safety board through TFTP protocol.
     *
     * @param ipAddress TFTP Server Ip address
     * @param fileName pdate file name
     * @param fileType TP and Controler: 0, Inverter: 1, Safety Board: 2
     * @param inverter 6 inverter information. No update: 0, Update: 1
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    updateSystem(ipAddress: string, fileName: string, fileType: number, inverter:SixNumArray ): Promise<boolean>;

    /**
     * Power Off Robot
     *
     * @param target Power Off target (0: Inverter, 1: DRCF)
     * @param power Power Off (0: power off, 1: cancel)
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, PowerManageTarget, PowerManageType } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          robotManager.setSystemPower(PowerManageTarget.SAFETYBOARD, PowerManageType.POWER_OFF);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    setSystemPower(target: PowerManageTarget, power: PowerManageType): Promise<boolean>;

    /**
     * Set the reference coordinate system for external force monitoring data of the tcp(targetExternalForceMonitoring monitorable value).
     *
     * @param targetId 0:Base coordinate, 1:Tool coordinate, 2:World coordinate, 3:Active user coordinate, 101~200:User coordinate
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const callback = (value: ExternalForceMonitoringData) => Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(value)}`);
     *          robotManager.targetExternalForceMonitoring.register(context, callback, true);
     *          robotManager.setExternalForceMonitoringTarget(101);
     *          return () => { robotManager.targetExternalForceMonitoring.unregister(context, callback);};
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    setExternalForceMonitoringTarget(targetId: number): Promise<boolean>;

    /**
     * get path of urdf file needed by simulator.
     *
     * @param robotModel? Enter robot model name or empty value
     *
     * @return string | undefined return urdf file path.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, RobotModel } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const result = robotManager.getModelFilePath(RobotModel.M0609);
     *          Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(result)}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getModelFilePath(robotModel?: RobotModel): string | undefined;

    /**
     * Robot parameter checksum calculation
     *
     * @param data RobotParameter
     *
     * @return string
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, IRobotParameterManager, RobotParameter } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      const robotParameterManager = context.getSystemManager(Context.ROBOT_PARAMETER_MANAGER) as IRobotParameterManager;
     *      useEffect(() => {
    *          const result = robotManager.getRobotChecksum(robotParameterManager.recentFile.value.data);
*              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(result)}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getRobotChecksum(data: RobotParameter): string;

    /**
     * Change robot operation speed.
     *
     * @param speed A desired operation speed (1~100).
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          robotManager.changeOperationSpeed(30);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    changeOperationSpeed(speed: number): Promise<boolean>

    /**
     * Search Serial Device List
     *
     * @summary Serial로 연결된 Device 장치 검색
     * @return Return {@link SerialPortList}
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, SerialPortList } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          robotManager.getSerialPortList()
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getSerialPortList(): Promise<SerialPortList>;

    /**
     * During force control, the scale value is transmitted to change the force gain value.
     *
     * @param forceFactor force scale factor
     * @param targetTime Time taken to set up.
     *
     * @api-version 1
     * @user
     * @deprecated Do not use in Module.
     */
    setForceFactor(forceFactor: SixNumArray, targetTime: number): Promise<void>;

    /**
     * During force control, the scale value is transmitted to change the damping gain value.
     *
     * @param dampingFactor damping scale factor
     * @param targetTime Time taken to set up.
     *
     * @api-version 1
     * @user
     * @deprecated Do not use in Module.
     */
    setDampingFactor(dampingFactor: SixNumArray, targetTime: number): Promise<void>;

    /**
     * Supported functions are different for each robot model.
     * return the list of robot functions and whether they are supported.
     *
     * @return Return {@link RobotFeatureList}
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, RobotFeatureList } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const result = robotManager.getSupportRobotFeatureList();
     *          Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(result)}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getSupportRobotFeatureList(): RobotFeatureList;

    /**
     * Get robot hardware specifications.
     *
     * @return Return {@link RobotHardwareSpecification}
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IRobotManager, RobotHardwareSpecification } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const robotManager = context.getSystemManager(Context.ROBOT_MANAGER) as IRobotManager;
     *      useEffect(() => {
     *          const result = robotManager.getRobotHardwareSpecification();
     *          Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(result)}`);
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getRobotHardwareSpecification(): RobotHardwareSpecification;

    /**
     * change safety workpiece weight usage mode
     *
     * @param mode {@link WorkpieceWeightMode}
     * @return Promise<boolean>
     *
     * @api-version 3
     * @system
     *
     * @experimental
     * This function is experimental and may change in the future.
     * Use with caution.
     */
    setWorkpieceWeightMode(mode: WorkpieceWeightMode): Promise<boolean>;
}

/**
 * Tool Shape in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type ToolShape = {
    /**
     * The unique symbol of the tool shape.
     *
     * @api-version 1
     * @user
     */
    symbol: string;
    /**
     * data of tool shape item
     *
     * @api-version 1
     * @user
     */
    toolShape: {
        /**
         * list of shapes to use
         * off: 0, on: 1
         *
         * @api-version 1
         * @user
         */
        validity: [0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1];
        /**
         * list of shapes
         *
         * @api-version 1
         * @user
         */
        shape: [SafetyObject, SafetyObject, SafetyObject, SafetyObject, SafetyObject];
    };
};

/**
 * Tool shape object
 * It has tool shape information and location information.
 *
 * @api-version 1
 * @user
 */
export type SafetyObject = {
    /**
     * Reference Coordinate
     * base: 0, world: 2
     * @api-version 1
     * @user
     */
    targetReference: 0 | 2;

    /**
     * Type of tool shape object.
     * 0(Sphere), 1(Capsule), 2(Cube)
     *
     * @api-version 1
     * @user
     */
    objectType: ToolShapeType;

    /**
     * data of tool shape
     * @api-version 1
     * @user
     */
    object: SafetyObjectSphere | SafetyObjectCapsule | SafetyObjectCube;
};

/**
 * Sphere type
 *
 * @api-version 1
 * @user
 */
export type SafetyObjectSphere = {
    /**
     * data of sphere type
     *
     * @api-version 1
     * @user
     */
    sphere: {
        radius: number;
        targetPose: Point3D;
    };
};

/**
 * Capsule type
 *
 * @api-version 1
 * @user
 */
export type SafetyObjectCapsule = {
    /**
     * data of capsule type
     *
     * @api-version 1
     * @user
     */
    capsule: {
        radius: number;
        targetPose: [Point3D, Point3D];
    };
};

/**
 * Information on the cube(AABB)
 *
 * @api-version 1
 * @user
 */
export type SafetyObjectCube = {
    /**
     * data of Cube type
     *
     * @api-version 1
     * @user
     */
    cube: {
        targetPose: [Point3D, Point3D];
    };
};

/**
 * Tool weight in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type ToolWeight = {
    /**
     * The unique symbol of the tool weight item
     *
     * @api-version 1
     * @user
     */
    symbol: string;
    /**
     * data of tool weight item
     * @api-version 1
     * @user
     */
    tool: {
        weight: number;
        cog: ThreeNumArray;
        inertia: SixNumArray;
    };
};

/**
 * Tool Center Point in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type ToolCenterPoint = {
    /**
     * The unique symbol of the TCP item.
     * @api-version 1
     * @user
     */
    symbol: string;
    /**
     * data of tcp item
     *
     * @api-version 1
     * @user
     */
    tcp: {
        targetPose: SixNumArray;
    };
};

/**
 * Install Pose in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type InstallPose = {
    /**
     * Robot slope on ground [°]
     *
     * @api-version 1
     * @user
     */
    gradient: number;
    /**
     * Robot rotation angle [°]
     *
     * @api-version 1
     * @user
     */
    rotation: number;
};

/**
 * Safety I/O in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type SafetyIO = {
    /**
     * Function information mapped to Safety input & output
     * Safety input {@link SafetyInputValues}
     * Safety output {@link SafetyOutputValues}
     * @api-version 1
     * @user
     */
    io: [TenNumArray, EightNumArray];
};

/**
 * Features available in safety input
 *
 * @api-version 1
 * @user
 */
export const SafetyInputValues = {
    /**
     * Protective Stop (STO) (L) : Safe Torque Off
     *
     * @api-version 1
     * @user
     */
    PROTECTIVE_STOP_STO_LOW: 1,

    /**
     * Emergency Stop (L)
     *
     * @api-version 1
     * @user
     */
    EMERGENCY_STOP_LOW: 2,
    /**
     * Protective Stop (L)
     *
     * @api-version 1
     * @user
     */
    PROTECTIVE_STOP_LOW: 3,
    /**
     * Reduced Speed (L)
     *
     * @api-version 1
     * @user
     */
    REDUCED_SPEED_ACTIVATION_LOW: 4,
    /**
     * 3-pos Enable Switch (L to H & H)
     *
     * @api-version 1
     * @user
     */
    POS_3_ENABLE_SWITCH_HIGH: 5,
    /**
     * Hand-guiding Enable Switch (L to H & H)
     *
     * @api-version 1
     * @user
     */
    HAND_GUIDING_ENABLE_SWITCH_HIGH: 6,
    /**
     * Hand Guide Control End & Task Resume (L to H) : Auto Reset & Resume (Rising Edge)
     *
     * @api-version 1
     * @user
     */
    HAND_GUIDING_END_TASK_RESUME_RISING_EDGE: 7,
    /**
     * Protective Stop (Auto Reset & Resume) (L)
     *
     * @api-version 1
     * @user
     */
    PROTECTIVE_STOP_LOW_AUTO_RESET_RESUME_RISING_EDGE: 8,
    /**
     * Safe Zone Dynamic Enable (H)
     *
     * @api-version 1
     * @user
     */
    SAFETY_ZONE_DYNAMIC_ENABLE_HIGH: 9,
    /**
     * Remote Control Mode (H)
     *
     * @api-version 1
     * @user
     */
    REMOTE_CONTROL_ENABLE_HIGH: 10,
    /**
     * Emergency Stop (No Loopback) (L)
     *
     * @api-version 1
     * @user
     */
    EMERGENCY_STOP_NO_LOOPBACK_LOW: 11,
    /**
     * Interlock Reset (L to H)
     *
     * @api-version 1
     * @user
     */
    INTERLOCK_RESET_RISING_EDGE: 13,
    /**
     * Protective Stop (SS1) (L)
     *
     * @api-version 1
     * @user
     */
    PROTECTIVE_STOP_SS1_LOW: 14,
    /**
     * Protective Stop (SS2) (L)
     *
     * @api-version 1
     * @user
     */
    PROTECTIVE_STOP_SS2_LOW: 15,
    /**
     * Safety Zone Dynamic Enabled (L)
     *
     * @api-version 1
     * @user
     */
    SAFETY_ZONE_DYNAMIC_ENABLE_LOW: 16
} as const;
/**
 * @ignore
 */
export type SafetyInputValues = typeof SafetyInputValues[keyof typeof SafetyInputValues];

/**
 * Features available in safety output
 *
 * @api-version 1
 * @user
 */
export const SafetyOutputValues = {
    /**
     * Safe Torque Off (STO) (L)
     *
     * @api-version 1
     * @user
     */
    SAFE_TORQUE_OFF_LOW: 1,

    /**
     * Safe Operating Stop (SOS)
     *
     * @api-version 1
     * @user
     */
    SAFE_OPERATING_STOP_LOW: 2,
    /**
     * Normal Speed Status (L)
     *
     * @api-version 1
     * @user
     */
    NORMAL_SPEED_LOW: 4,
    /**
     * Reduced Speed Status (L)
     *
     * @api-version 1
     * @user
     */
    REDUCED_SPEED_LOW: 5,
    /**
     * Auto Mode (L)
     *
     * @api-version 1
     * @user
     */
    AUTO_MODE_LOW: 6,
    /**
     * Manual Mode (L)
     *
     * @api-version 1
     * @user
     */
    MANUAL_MODE_LOW: 7,
    /**
     * Standalone Zone (L)
     *
     * @api-version 1
     * @user
     */
    STANDALONE_ZONE_LOW: 8,
    /**
     * Collaborative Zone (L)
     *
     * @api-version 1
     * @user
     */
    COLLABORATIVE_ZONE_LOW: 9,
    /**
     * High Priority Zone(L)
     *
     * @api-version 1
     * @user
     */
    HIGH_PRIORITY_ZONE_LOW: 10,
    /**
     * Tool Orientation Limited Zone (L)
     *
     * @api-version 1
     * @user
     */
    TOOL_ORIENTATION_LIMIT_ZONE_LOW: 11,
    /**
     * Emergency Stop (L)
     *
     * @api-version 1
     * @user
     */
    EMERGENCY_STOP_LOW: 12,
    /**
     * Emergency Stop (excl. No Loopback Input) (L)
     *
     * @api-version 1
     * @user
     */
    EMERGENCY_STOP_NO_LOOPBACK_INPUT_LOW: 13,
    /**
     * Designated Zone (L)
     *
     * @api-version 1
     * @user
     */
    DESIGNATED_ZONE_LOW: 15,
    /**
     * Remote Mode (L)
     *
     * @api-version 1
     * @user
     */
    REMOTE_CONTROL_MODE_LOW: 17,
    /**
     * Abnormal(L)
     *
     * @api-version 1
     * @user
     */
    ABNORMAL_LOW: 18,
} as const;
/**
 * @ignore
 */
export type SafetyOutputValues = typeof SafetyOutputValues[keyof typeof SafetyOutputValues];

/**
 * Normal I/O in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type NormalIO = {
    /**
     * Function information mapped to Normal io.
     * Normal Input(0): {@link NormalInputValues}
     * Normal Output(1): {@link NormalOutputValues}
     * @api-version 1
     * @user
     */
    io: [TwentyNumArray, SixteenNumArray];
};

/**
 * Flange I/O in Robot Parameters
 *
 * @api-version 2
 * @user
 */
export type FlangeIOType = {
    /**
     * Supply Voltage
     *
     * @api-version 2
     * @user
     */
    supplyVoltage: GpioDigitalVoltage;
    /**
     * Digital Output Type
     *
     * @api-version 2
     * @user
     */
    digitalOutputType: {
        x1: GpioDigitalType;
        x2: GpioDigitalType;
    };
    /**
     * Flange Analog X1
     *
     * @api-version 2
     * @user
     */
    flangeAnalogX1: {
        pinMode: FlangeAnalogPinMode;
        baudRate: number;
        dataBit: FlangeByteSize;
        parityBit: ParityCheck;
        stopBit: StopBit;
    };
    /**
     * Flange Analog X2
     *
     * @api-version 2
     * @user
     */
    flangeAnalogX2: {
        pinMode: FlangeAnalogPinMode;
        baudRate: number;
        dataBit: FlangeByteSize;
        parityBit: ParityCheck;
        stopBit: StopBit;
    };
    /**
     * Servo Off
     *
     * @api-version 2
     * @user
     */
    servoOff: FlangeInterlockServoOff;
    /**
     * Interrupted
     *
     * @api-version 2
     * @user
     */
    interrupted: FlangeInterlockInterrupted;
}

/**
 * Features available in normal input
 *
 * @api-version 2
 * @user
 */
export const NormalInputValues = {
    /**
     * Not used.
     *
     * @api-version 2
     * @user
     */
    NOT_USED: 0,
    /**
     * Power on (H)
     *
     * @api-version 2
     * @user
     */
    POWER_ON_HIGH: 1,
    /**
     * Power off (H)
     *
     * @api-version 2
     * @user
     */
    POWER_OFF_HIGH: 2,
} as const;
/**
 * @ignore
 */
export type NormalInputValues = typeof NormalInputValues[keyof typeof NormalInputValues];

/**
 * Features available in normal output
 *
 * @api-version 2
 * @user
 */
export const NormalOutputValues = {
    /**
     * Not used.
     *
     * @api-version 2
     * @user
     */
    NOT_USED: 0,
    /**
     * Safe Torque Off (STO) (L)
     *
     * @api-version 2
     * @user
     */
    SAFE_TORQUE_OFF_LOW: 1,
    /**
     * Safe Operating Stop (SOS)
     *
     * @api-version 2
     * @user
     */
    SAFE_OPERATING_STOP_LOW: 2,
    /**
     * Deceleration (L)
     *
     * @api-version 2
     * @user
     */
    DECELERATION_LOW: 3,
    /**
     * Normal Speed Status (L)
     *
     * @api-version 2
     * @user
     */
    NORMAL_SPEED_LOW: 4,
    /**
     * Reduced Speed Status (L)
     *
     * @api-version 2
     * @user
     */
    REDUCED_SPEED_LOW: 5,
    /**
     * Auto Mode (L)
     *
     * @api-version 2
     * @user
     */
    AUTO_MODE_LOW: 6,
    /**
     * Manual Mode (L)
     *
     * @api-version 2
     * @user
     */
    MANUAL_MODE_LOW: 7,
    /**
     * Standalone Zone (L)
     *
     * @api-version 2
     * @user
     */
    STANDALONE_ZONE_LOW: 8,
    /**
     * Collaborative Zone (L)
     *
     * @api-version 2
     * @user
     */
    COLLABORATIVE_ZONE_LOW: 9,
    /**
     * High Priority Zone(L)
     *
     * @api-version 2
     * @user
     */
    HIGH_PRIORITY_ZONE_LOW: 10,
    /**
     * Tool Orientation Limited Zone (L)
     *
     * @api-version 2
     * @user
     */
    TOOL_ORIENTATION_LIMIT_ZONE_LOW: 11,
    /**
     * Task operating (L)
     *
     * @api-version 2
     * @user
     */
    TASK_OPERATING_LOW: 12,
    /**
     * Designated Zone (L)
     *
     * @api-version 2
     * @user
     */
    DESIGNATED_ZONE_LOW: 13,
    /**
     * Robot in motion (L)
     *
     * @api-version 2
     * @user
     */
    ROBOT_IN_MOTION_LOW: 14,
    /**
     * Robot in (L)
     *
     * @api-version 2
     * @user
     */
    REMOTE_CONTROL_MODE_LOW: 15,
    /**
     * Robot in motion (L)
     *
     * @api-version 2
     * @user
     */
     MATSTERING_ALARM_LOW: 16,
    /**
     * Robot in motion (L)
     *
     * @api-version 2
     * @user
     */
    HOME_POSITION_LOW: 17,
} as const;
/**
 * @ignore
 */
export type NormalOutputValues = typeof NormalOutputValues[keyof typeof NormalOutputValues];

/**
 * Safety Zone in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type SafetyZone = {
    /**
     * Name of safety zone item
     * @api-version 1
     * @user
     */
    alias: string;
    /**
     * Type of safety zone
     *
     * @api-version 1
     * @user
     */
    zoneType: SafetyZoneType;
    /**
     * data of zone property
     * @api-version 1
     * @user
     */
    zoneProperty: SafetyZonePropertySpaceLimit | SafetyZonePropertyLocalZone;
    /**
     * data of safety zone shape
     * @api-version 1
     * @user
     */
    shape: SafetyZoneShape;
};

/**
 * Nudge function setting in robot parameters
 * @api-version 1
 * @user
 */
export type Nudge = {
    /**
     * Whether to use the nudge function.  disalbe: 0, enable: 1
     * @api-version 1
     * @user
     */
    enable: 0 | 1;
    /**
     * The input force that will trigger the nudge. M, A, E-Series Range(10 ~ 50) , H-Series Range(15 ~ 50)
     * @api-version 1
     * @user
     */
    inputForce: number;
    /**
     * Delay time from receiving a signal to starting the operation. Range(0 ~ 30 sec)
     * @api-version 1
     * @user
     */
    delayTime: number;
};

/**
 * Cockpit setting in robot parameters
 * @api-version 1
 * @user
 */
export type CockPit = {
    /**
     * Whether to use. disalbe: 0, enable: 1
     * @api-version 1
     * @user
     */
    enable: 0 | 1;
    /**
     * Functon information mapped to the button
     * Direct Teach: 0, The robot series that does not have JTS and FTS is the only one where it can be used.
     * TCP-Z: 1
     * TCP-XY: 2
     * Orientation Only: 3
     * Positon Only: 4
     *
     * @api-version 1
     * @user
     */
    button: [0 | 1 | 2 | 3 | 4, 0 | 1 | 2 | 3 | 4];
    /**
     * recovery teach mode activation
     * disalbe: 0, enable: 1
     * @api-version 1
     * @user
     */
    recoveryTeach: 0 | 1;
};

/**
 * auto servo off in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type IdleServoOff = {
    /**
     * disalbe: 0, enable: 1
     *
     * @api-version 1
     * @user
     */
    enable: 0 | 1;
    /**
     * elapse time (1 ~ 1440 minutes)
     *
     * @api-version 1
     * @user
     */
    elapseTime: number;
};

/**
 * World Coordinate in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type World2BaseRelation = {
    /**
     * relation Pose
     *
     * @api-version 1
     * @user
     */
    position: SixNumArray;
};

/**
 * User Coordinate in Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type UserCoordinate = {
    /**
     * Reference Coordinate
     * base: 0, world: 2
     *
     * @api-version 1
     * @user
     */
    targetReference: 0 | 2;
    /**
     * Target Pose
     *
     * @api-version 1
     * @user
     */
    targetPose: SixNumArray;
    /**
     * User ID (101 ~ 200)
     *
     * @api-version 1
     * @user
     */
    id: number;
};

/**
 * Calculate Coordinate
 *
 * @api-version 1
 * @user
 */
export type CalculateCoordinate = {
    /**
     * Input Count
     * 1: Point, 2: Line, 3: Plane, 4: Plane + Origin Offset
     *
     * @api-version 1
     * @user
     */
    inputCount: 1 | 2 | 3 | 4;
    /**
     * Input Mode
     * Used only when the number of {@link CalculateCoordinate.inputCount} is 2
     * 0: using TCP Z axis, 1: using Point 1 Z axis
     *
     * @api-version 1
     * @user
     */
    inputMode: 0 | 1 | null;
    /**
     * Reference Coordinate
     * base: 0, world: 2
     *
     * @api-version 1
     * @user
     */
    targetReference: 0 | 2;
    /**
     * Target Pose 1
     *
     * @api-version 1
     * @user
     */
    targetPose1: SixNumArray;
    /**
     * Target Pose 2
     *
     * @api-version 1
     * @user
     */
    targetPose2: SixNumArray | null;
    /**
     * Target Pose 3
     *
     * @api-version 1
     * @user
     */
    targetPose3: SixNumArray | null;
    /**
     * Target Pose 4
     *
     * @api-version 1
     * @user
     */
    targetPose4: SixNumArray | null;
};
/**
 * Robot Parameters
 *
 * @api-version 1
 * @user
 */
export type RobotParameter = {
    /**
     * Updated Date
     *
     * @api-version 1
     * @user
     */
    updatedAt?: number;
    /**
     * Joint Range
     *
     * @api-version 1
     * @user
     */
    jointRange?: JointRange;
    /**
     * General Range
     *
     * @api-version 1
     * @user
     */
    generalRange?: GeneralRange;
    /**
     * Safety Stop Modes
     *
     * @api-version 1
     * @user
     */
    safetyFunction?: SafetyStopMode;
    /**
     * Safety I/O
     *
     * @api-version 1
     * @user
     */
    safetyIO?: SafetyIO;
    /**
     * Normal I/O
     *
     * @api-version 1
     * @user
     */
    configurableIO?: NormalIO;
    /**
     * Safety Zone items
     *
     * @api-version 1
     * @user
     */
    safetyZone?: SafetyZone[];
    /**
     * Collision Sensitivity (1 ~ 100%)
     *
     * @api-version 1
     * @user
     */
    collisionSensitivity?: number;
    /**
     * Io Speed Ratio (1 ~ 100%)
     *
     * @api-version 1
     * @user
     */
    ioSpeedRatio?: number;
    /**
     * TCP items
     *
     * @api-version 1
     * @user
     */
    configTCP?: ToolCenterPoint[];
    /**
     * Tool Weight items
     *
     * @api-version 1
     * @user
     */
    configTool?: ToolWeight[];
    /**
     * Tool Shape items
     *
     * @api-version 1
     * @user
     */
    configToolShape?: ToolShape[];
    /**
     * Actived TCP
     *
     * @api-version 1
     * @user
     */
    activeTcp?: string;
    /**
     * Actived Tool Weight
     *
     * @api-version 1
     * @user
     */
    activeTool?: string;
    /**
     * Actived Tool Shape
     *
     * @api-version 1
     * @user
     */
    activeToolShape?: string;
    /**
     * Install Pose
     *
     * @api-version 1
     * @user
     */
    installPose?: InstallPose;
    /**
     * Nudge
     *
     * @api-version 1
     * @user
     */
    configNudge?: Nudge;
    /**
     * CockPit
     *
     * @api-version 1
     * @user
     */
    cockPit?: CockPit;
    /**
     * Auto Servo Off
     *
     * @api-version 1
     * @user
     */
    idleOff?: IdleServoOff;
    /**
     * World Coordinate
     *
     * @api-version 1
     * @user
     */
    world2BaseRelation?: World2BaseRelation;
    /**
     * User Coordinate items
     *
     * @api-version 1
     * @user
     */
    userCoordinates?: UserCoordinate[];
    /**
     * Delete Safety Zone items
     *
     * @api-version 1
     * @user
     */
    delSafetyZone?: string[];
    /**
     * Delete TCP items
     *
     * @api-version 1
     * @user
     */
    delTcp?: string[];
    /**
     * Delete Tool Weight items
     *
     * @api-version 1
     * @user
     */
    delToolWeight?: string[];
    /**
     * Delete Tool Shape items
     *
     * @api-version 1
     * @user
     */
    delToolShape?: string[];
    /**
     * Delete User Coordinate items
     *
     * @api-version 1
     * @user
     */
    delUserCoordinate?: number[];
    /**
     * Flange I/O
     *
     * @api-version 2
     * @user
     */
    flangeIO?: FlangeIOType;
};

/**
 * Homing option setting in robot parameters
 * @api-version 1
 * @system
 */
 export type HomingOption = {
    /**
     * Whether to use custom home.
     * @api-version 1
     * @system
     */
    useCustomHome: boolean;
    /**
     * Custom home target pose.
     * @api-version 1
     * @system
     */
    customHomePose: SixNumArray;
};

/**
 * Robot Model ( M Series, A Series, H Series, E Series)
 *
 * @enum
 * @api-version 1
 * @user
 */
export const RobotModel = { // ROBOT_MODEL
    /**
     * M0609
     *
     * @api-version 1
     * @user
     */
    M0609: "M0609",
    /**
     * M0617
     *
     * @api-version 1
     * @user
     */
    M0617: "M0617",
    /**
     * M1013
     *
     * @api-version 1
     * @user
     */
    M1013: "M1013",
    /**
     * M1509
     *
     * @api-version 1
     * @user
     */
    M1509: "M1509",
    /**
     * A0509
     *
     * @api-version 1
     * @user
     */
    A0509: "A0509",
    /**
     * A0509S
     *
     * @api-version 1
     * @user
     */
    A0509S: "A0509S",
    /**
     * A0509F(NSF)
     *
     * @api-version 1
     * @user
     */
    A0509F: "A0509F",
    /**
     * A0912
     *
     * @api-version 1
     * @user
     */
    A0912: "A0912",
    /**
     * A0912S
     *
     * @api-version 1
     * @user
     */
    A0912S: "A0912S",
    /**
     * A0912F(NSF)
     *
     * @api-version 1
     * @user
     */
    A0912F: "A0912F",
    /**
     * H2017
     *
     * @api-version 1
     * @user
     */
    H2017: "H2017",
    /**
     * H2515
     *
     * @api-version 1
     * @user
     */
    H2515: "H2515",
    /**
     * E0509
     *
     * @api-version 1
     * @user
     */
    E0509: "E0509",
} as const;
/**
 * @ignore
 */
export type RobotModel = typeof RobotModel[keyof typeof RobotModel];

/**
 * Robot Limits
 *
 * @api-version 1
 * @system
 */
export type RobotLimit = {
    /**
     * TCP/Robot Limit
     *
     * @api-version 1
     * @system
     */
    tcpRobot: {
        /**
         * max force
         *
         * @api-version 1
         * @system
         */
        maxForce: number;
        /**
         * max power
         *
         * @api-version 1
         * @system
         */
        maxPower: number;
        /**
         * max speed
         *
         * @api-version 1
         * @system
         */
        maxSpeed: number;
        /**
         * max momentum
         *
         * @api-version 1
         * @system
         */
        maxMomentum: number;
        /**
         * max collision
         *
         * @api-version 1
         * @system
         */
        maxCollision: number;
    }
    /**
     * joint speed Limit
     *
     * @api-version 1
     * @system
     */
    jointSpeed: {
        /**
         * max velocity
         *
         * @api-version 1
         * @system
         */
        maxVelocity: SixNumArray;
        /**
         * tolerance
         *
         * @api-version 1
         * @system
         */
        tolerance: SixNumArray;
    }
    /**
     * joint angle Limit
     *
     * @api-version 1
     * @system
     */
    jointAngle: {
        /**
         * max range
         *
         * @api-version 1
         * @system
         */
        maxRange: SixNumArray;
        /**
         * min range
         *
         * @api-version 1
         * @system
         */
        minRange: SixNumArray;
        /**
         * tolerance
         *
         * @api-version 1
         * @system
         */
        tolerance: SixNumArray;
    }
};

/**
 * Controller Digital I/O Alias
 *
 * @api-version 1
 * @system
 */
export type ControllerDigitalIoAlias = {
    /**
     * An array of strings of size 20.
     *
     * @api-version 1
     * @system
     */
    input: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
    /**
     * An array of strings of size 16.
     *
     * @api-version 1
     * @system
     */
    output: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string];
}

/**
 * Flange Digital I/O Alias
 *
 * @api-version 1
 * @system
 */
export type FlangeDigitalIoAlias = {
    /**
     * An array of strings of size 4.
     * @api-version 1
     * @system
     */
    input: [string, string, string, string];
    /**
     * An array of strings of size 4.
     * @api-version 1
     * @system
     */
    output: [string, string, string, string];
}

/**
 * Controller Analog I/O Alias
 *
 * @api-version 1
 * @system
 */
export type ControllerAnalogIoAlias = {
    /**
     * An array of strings of size 2.
     *
     * @api-version 1
     * @system
     */
    input: [string, string];
    /**
     * An array of strings of size 2.
     *
     * @api-version 1
     * @system
     */
    output: [string, string];
}

/**
 * Flange Analog I/O Alias
 *
 * @api-version 1
 * @system
 */
export type FlangeAnalogIoAlias = {
    /**
     * An array of strings of size 4.
     * @api-version 1
     * @system
     */
    input: [string, string, string, string];
}

/**
 * Results of request to manage tool settings.
 *
 * @api-version 3
 * @system
 */
export const ToolManageResult = {
    /**
     * Cancelled by user.
     *
     * @api-version 3
     * @user
     */
    CANCELED_BY_USER: 0x0000_0001,
    /**
     * Requested item has been added successfully.
     *
     * @api-version 3
     * @user
     */
    ADDED: 0x0000_0002,
    /**
     * Requested item has been updated successfully.
     *
     * @api-version 3
     * @user
     */
    UPDATED: 0x0000_0003,
    /**
     * Requested item has been deleted successfully.
     *
     * @api-version 3
     * @user
     */
    DELETED: 0x0000_0004,
    /**
     * Tool with the same name and value requested has already been added.
     *
     * @api-version 3
     * @user
     */
    ALREADY_ADDED: 0x0000_0005,
    /**
     * Tool with the same name and value requested has already been added.
     *
     * @api-version 3
     * @user
     */
    ALREADY_UPDATED: 0x0000_0006,
    /**
     * Failed to manage tool setting caused by unknown error.
     *
     * @api-version 3
     * @user
     */
    UNKNOWN_ERROR: 0x0001_0001,
    /**
     * Failed to add a new tool because there is a tool with the same name but different values.
     *
     * @api-version 3
     * @user
     */
    NAME_DUPLICATED: 0x0001_0002,
    /**
     * Failed to update/delete a tool because there is no tools with the same name.
     *
     * @api-version 3
     * @user
     */
    NOT_EXISTS: 0x0001_0003,
}  as const;
/**
 * @ignore
 */
export type ToolManageResult = typeof ToolManageResult[keyof typeof ToolManageResult];

/**
 * Robot Parameter settings API interface that can only get and set
 *
 * @api-version 1
 * @user
 */
export interface IParameterItem<T> {
    /**
     * {@link Monitorable} an item
     *
     * @api-version 1
     * @user
     */
    readonly item: Monitorable<T>;
    /**
     * Set data
     *
     * @param data The data of item to be set
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    set(data: T): Promise<boolean>

    /**
     * Get data
     *
     * @return Return data
     *
     * @api-version 1
     * @user
     */
    get(): T | null
}

/**
 * List-type robot parameter setting API interface.
 *
 * @api-version 1
 * @user
 */
export interface IParameterMultiItem<T> {
    /**
     * {@link Monitorable} an item list
     *
     * @api-version 1
     * @user
     */
    readonly items: Monitorable<T[]>;
    /**
     * Change the value of an existing item.
     *
     * @param data The data of item to be set
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    set(data: T): Promise<boolean>
    /**
     * Get data list
     *
     * @return Return data
     *
     * @api-version 1
     * @user
     */
    get(): T[]
    /**
     * Add Item
     *
     * @param data The data of item to be added
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    add(data: T): Promise<boolean>
    /**
     * Delete Item
     *
     * @param data The id or name of item to be deleted
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    delete(id: string | number): Promise<boolean>
}

/**
 * List-type robot parameter setting API interface. The currently selected item can be set.
 *
 * @api-version 1
 * @user
 */
export interface IParameterSelectableItem<T> extends IParameterMultiItem<T> {
    /**
     * {@link Monitorable} The current selected item.
     *
     * @api-version 1
     * @user
     */
    readonly selection: Monitorable<string>;

    /**
     * Select item
     *
     * @param name The name to be selected
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    select(name: string): Promise<boolean>

    /**
     * Deselect
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    deselect(): Promise<boolean>

    /**
     * Get selected item name
     *
     * @return Return selected item name
     *
     * @api-version 1
     * @user
     */
    getSelection(): string

    /**
     * Get selected item
     *
     * @return Return selected item
     *
     * @api-version 1
     * @user
     */
    getSelectedItem(): T | undefined
}

/**
 * IRobotParameterManager have APIs for robot parameters setting.
 *
 * @api-version 1
 * @system
 */
export interface IRobotParameterManager extends ISystemManager {
    /**
     * {@link Monitorable} {@link RobotParameter}.
     * Recent robot parameter file information.
     *
     * @api-version 1
     * @user
     */
    recentFile: Monitorable<{name:string, data:RobotParameter}>;

    /**
     * Tool weight setting api
     *
     * @api-version 1
     * @user
     */
    toolWeight: IParameterSelectableItem<ToolWeight>;

    /**
     * Tool shape setting api
     *
     * @api-version 1
     * @user
     */
    toolShape: IParameterSelectableItem<ToolShape>;

    /**
     * Tool center point setting api
     *
     * @api-version 1
     * @user
     */
    tcp: IParameterSelectableItem<ToolCenterPoint>;

    /**
     * Safety Zone setting api
     *
     * @api-version 1
     * @user
     */
    safetyZone: IParameterMultiItem<SafetyZone>;
    /**
     * User Coordinate setting api
     *
     * @api-version 1
     * @user
     */
    userCoordinate: IParameterMultiItem<UserCoordinate>;
    /**
     * Install pose setting api
     *
     * @api-version 1
     * @user
     */
    installPose: IParameterItem<InstallPose>;
    /**
     * World to base relation pose setting api
     *
     * @api-version 1
     * @user
     */
    worldToBaseRelation: IParameterItem<World2BaseRelation>;
    /**
     * Cockpit setting api
     *
     * @api-version 1
     * @user
     */
    cockpit: IParameterItem<CockPit>;
    /**
     * Nudge setting api
     *
     * @api-version 1
     * @user
     */
    nudge: IParameterItem<Nudge>;
    /**
     * Safety IO setting api
     *
     * @api-version 1
     * @user
     */
    safetyIo: IParameterItem<SafetyIO>;
    /**
     * Normal IO setting api
     *
     * @api-version 1
     * @user
     */
    normalIo: IParameterItem<NormalIO>;
    /**
     * Joint range setting api
     *
     * @api-version 1
     * @user
     */
    jointRange: IParameterItem<JointRange>;
    /**
     * General Range setting api
     *
     * @api-version 1
     * @user
     */
    generalRange: IParameterItem<GeneralRange>;
    /**
     * Idle servo off setting api
     *
     * @api-version 1
     * @user
     */
    idleServoOff: IParameterItem<IdleServoOff>;
    /**
     * Safety stop mode setting api
     *
     * @api-version 1
     * @user
     */
    safetyStopMode: IParameterItem<SafetyStopMode>;
    /**
     * Collision sensitivity setting api
     *
     * @api-version 1
     * @user
     */
    collisionSensitivity: IParameterItem<number>;
    /**
     * IO speed ratio setting api
     *
     * @api-version 1
     * @user
     */
    ioSpeedRatio: IParameterItem<number>;

    /**
     * Homing option setting api
     *
     * @api-version 1
     * @user
     */
    homingOption: IParameterItem<HomingOption>;

    /**
     * Get all robot parameter names added.
     *
     * @return Promise<string[]> return all robot parameter names added.
     *
     * @api-version 1
     * @user
     */
    getAllName(): Promise<string[]>;

    /**
     * Add robot parameter to db
     *
     * @param name robot parameter name
     * @param data {@link RobotParameter}
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    add(name: string, data: RobotParameter): Promise<boolean>;

    /**
     * Add robot parameter to db
     *
     * @param name robot parameter name
     * @param data {@link RobotParameter}
     * @param options Additional options.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 3
     * @system
     */
    add(name: string, data: RobotParameter, options?: { withoutRecentFile?: boolean }): Promise<boolean>;

    /**
     * Set robot parameter in db
     *
     * @param name robot parameter name
     * @param data {@link RobotParameter}
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    set(name: string, data: RobotParameter): Promise<boolean>;

    /**
     * Get robot parameter in db
     *
     * @param name robot parameter name
     * @return Return Robot Parameter {@link RobotParameter}
     *
     * @api-version 1
     * @user
     */
    get(name: string): Promise<RobotParameter | null>;

    /**
     * Get robot parameter in db
     *
     * @return Return robot parameter array {@link RobotParameter}
     *
     * @api-version 1
     * @user
     */
    getAll(): Promise<{ name: string; data: RobotParameter }[]>;

    /**
     * remove robot parameter in db
     *
     * @param name robot parameter name
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    remove(name: string): Promise<boolean>;

    /**
     * Get Initial Robot Parameter
     *
     * @param robotModel robot model {@link RobotModel}
     * @return Return Initial Robot Parameter {@link RobotParameter}
     *
     * @api-version 1
     * @user
     */
    getInitialValue(robotModel: RobotModel): RobotParameter;

    /**
     * Get Robot Limit Value
     *
     * @param robotModel robot model {@link RobotModel}
     * @return Return Robot Limits {@link RobotLimit}
     *
     * @api-version 1
     * @user
     */
    getRobotLimit(robotModel: RobotModel): RobotLimit;

    /**
     * Get Max Payload
     *
     * @param robotModel robot model {@link RobotModel}
     * @return Return Max Payload [kg]
     *
     * @api-version 1
     * @user
     */
    getMaxPayload(robotModel: RobotModel): number;

    /**
     * Get Robot Parameters in Controller System
     *
     * @return Return Robot Parameter {@link RobotParameter}
     *
     * @api-version 1
     * @user
     */
    getSystem(): RobotParameter;

    /**
     * Set Robot Parameters in Controller System
     *
     * @param data {@link RobotParameter}
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    setSystem(data: RobotParameter): Promise<boolean>;

    /**
     * Get Controller Digital I/O Alias
     *
     * @return Return Controller Digital I/O Alias {@link ControllerDigitalIoAlias}
     *
     * @api-version 1
     * @user
     */
    getControllerDigitalIoAlias(): Promise<ControllerDigitalIoAlias | null>;

    /**
     * Set Controller Digital I/O Alias
     *
     * @param data {@link ControllerDigitalIoAlias}
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    setControllerDigitalIoAlias(data: ControllerDigitalIoAlias): Promise<boolean>;

    /**
     * Get Flange Digital I/O Alias
     *
     * @return Return Flange Digital I/O Alias {@link FlangeDigitalIoAlias}
     *
     * @api-version 1
     * @user
     */
    getFlangeDigitalIoAlias(): Promise<FlangeDigitalIoAlias | null>;

    /**
     * Set Flange Digital I/O Alias
     *
     * @param data {@link FlangeDigitalIoAlias}
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    setFlangeDigitalIoAlias(data: FlangeDigitalIoAlias): Promise<boolean>;

    /**
     * Get Controller Analog I/O Alias
     *
     * @return Return Controller Analog I/O Alias {@link ControllerAnalogIoAlias}
     *
     * @api-version 1
     * @user
     */
    getControllerAnalogIoAlias(): Promise<ControllerAnalogIoAlias | null>;

    /**
     * Set Controller Analog I/O Alias
     *
     * @param data {@link ControllerAnalogIoAlias}
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    setControllerAnalogIoAlias(data: ControllerAnalogIoAlias): Promise<boolean>;

    /**
     * Get Flange Analog I/O Alias
     *
     * @return Return Flange Analog I/O Alias {@link FlangeAnalogIoAlias}
     *
     * @api-version 1
     * @user
     */
    getFlangeAnalogIoAlias(): Promise<FlangeAnalogIoAlias | null>;

    /**
     * Set Flange Analog I/O Alias
     *
     * @param data {@link FlangeAnalogIoAlias}
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    setFlangeAnalogIoAlias(data: FlangeAnalogIoAlias): Promise<boolean>;

    /**
     * Get system variable list
     *
     * @return System Variable list {@link SystemVariable}
     *
     * @api-version 1
     * @user
     */
    getSystemVariables():Promise<SystemVariable[]>;

    /**
     * Add system variable
     *
     * @param data {@link SystemVariable}
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    addSystemVariable(data: SystemVariable):  Promise<boolean>;

    /**
     * Set system variable
     *
     * @param data {@link SystemVariable}
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    setSystemVariable(data: SystemVariable):  Promise<boolean>;

    /**
     * Delete system variable
     *
     * @param name name of system variable
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    delSystemVariable(name: string):  Promise<boolean>;

    /**
     * set option of move home
     *
     * @param use use moveToUserHome(true), use moveToHWHome(false)
     * @param pose if use userhome. go to this pose.
     * @return Promise<boolean>
     *
     * @api-version 1
     * @system
     */
    setHomingOption(data: HomingOption): Promise<boolean>;

    /**
     * set wheter to use custom home position.
     *
     * @param use use moveToUserHome(true), use moveToHWHome(false)
     * @return Promise<boolean>
     *
     * @api-version 2
     * @system
     */
    setUseUserHome(use: boolean): Promise<boolean>;

    /**
     * get option of move home
     *
     * @return move home option.
     *
     * @api-version 1
     * @user
     */
    getHomingOption(): Promise<HomingOption>;

    /**
     * Request to manage tool settings.
     *
     * @param settings
     * @return Return <Promise> Fulfills with array of {@link name} and {@link ToolManageResult} pairs if the request has been operated successfully, otherwise {@link ToolManageResult}.
     *
     * @api-version 3
     * @user
     */
    manageTools(settings: {
        add?: { tcp?: ToolCenterPoint[], toolWeight?: ToolWeight[], toolShape?: ToolShape[] },
        set?: { tcp?: ToolCenterPoint[], toolWeight?: ToolWeight[], toolShape?: ToolShape[] },
        del?: { tcp?: string[], toolWeight?: string[], toolShape?: string[] }
    }): Promise<{ tcp: { name: string, result: ToolManageResult }[], toolWeight: { name: string, result: ToolManageResult }[], toolShape: { name: string, result: ToolManageResult }[] } | ToolManageResult>;
}

/**
 * select allowed zone for setWorkpiceWeight {@link WorkpieceWeightMode}
 * @api-version 3
 * @system
 *
 * @experimental
 * This function is experimental and may change in the future.
 * Use with caution.
 */
export const WorkpieceWeightMode = {
    /**
     * allow set workpiece weight mode on only collision sensitivity reduction zone
     * @api-version 3
     * @system
     */
    COLLISION_SENSITIVITY_REDUCTION_ZONE : 0,
    /**
     * allow set workpiece weight mode on all zone
     * @api-version 3
     * @system
    */
    ALL_ZONE: 1
} as const;
/**
 * @ignore
 */
export type WorkpieceWeightMode = typeof WorkpieceWeightMode[keyof typeof WorkpieceWeightMode];

/**
 * ICommunicationManager have device connection protocol setting api
 * For example, digital I/O, Modbus, tcp/ip, ethernet ip, serial, Focas etc...
 *
 * @api-version 1
 * @user
 */
export interface ICommunicationManager extends ISystemManager {
    /**
     * Aio have device connection using Analog I/O communication
     * For example, Control Board AIO and Flange Board DIO
     *
     * @api-version 1
     * @user
     */
    aio: IAnalogIO

    /**
     * Dio have device connection using Digital I/O communication
     * For example, Control Board DIO and Flange Board DIO
     *
     * @api-version 1
     * @user
     */
    dio: IDigitalIO

    /**
     * Modbus have device connection using Modbus communication
     * For example, setting that Write Coil, Write Register, Write Multiple Coil etc...
     *
     * @api-version 1
     * @user
     */
    modbus: IModbus

    /**
     * Tcp have device connection using TCP/IP communication
     * For example, setting that TCP/IP client and TCP/IP Server
     *
     * @api-version 1
     * @user
     */
    tcpIp: ITcpIp

    /**
     * Serial have device connection using Serial communication
     * For example, setting that Serial data
     *
     * @api-version 1
     * @user
     */
    serial: ISerial

    /**
     * Focas have device connection using Focas communication
     * For example, setting that Focas data
     *
     * @api-version 1
     * @user
     */
    focas: IFocas

    /**
     * EthernetIp have device connection using EthernetIp communication
     * For example, setting that EthernetIp data
     *
     * @api-version 1
     * @user
     * @deprecated
     */
    ethernetIp: IEthernetIP

    /**
     * industrialEthernet have device connection using industrialEthernet communication
     * For example, setting that EthernetIp data
     *
     * @api-version 2
     * @user
     */
    industrialEthernet: IIndustrialEthernet
}

/**
 * ITcp have api and monitoring data variable. These elements are related to TCP/IP communication function.
 *
 * @api-version 1
 * @user
 */
export interface ITcpIp {
    /**
     * {@link Monitorable}
     * Server socket message received
     *
     * @api-version 1
     * @user
     */
    tcpServerMessageReceived: Monitorable<TcpCommunicationMonitoringData>;

    /**
     * {@link Monitorable}
     * A new client is connected to the server socket.
     *
     * @api-version 1
     * @user
     */
    tcpServerNotifyNewConnect: Monitorable<TcpCommunicationMonitoringData>;
    /**
     * {@link Monitorable}
     * The connected client is disconnected.
     *
     * @api-version 1
     * @user
     */
    tcpServerNotifyDisconnect: Monitorable<TcpCommunicationMonitoringData>;

    /**
     * {@link Monitorable}
     * Client socket message received
     *
     * @api-version 1
     * @user
     */
    tcpClientMessageReceived: Monitorable<TcpCommunicationMonitoringData>;
    /**
     * {@link Monitorable}
     * Client socket is disconnected.
     * The unique ID of the server to which the client is disconnected.
     *
     * @api-version 1
     * @user
     */
    tcpClientNotifyDisconnect: Monitorable<TcpCommunicationMonitoringData>;
    /**
     * {@link Monitorable}
     * Client socket is recoonected.
     * Unique id of the server to which the client is connected.
     *
     * @api-version 1
     * @user
     */
    tcpClientNotifyReconnect: Monitorable<TcpCommunicationMonitoringData>;



    /**
     * Open TCP Server or Connect to TCP Server(Client)
     * @param  uniqueId Unique id.
     * @param  enType TCP communication type
     * @param  ipAddress Ip address for client mode
     * @param  portIndex Port number
     *
     * @return errorType: ErrorType, result: Unique ID of created comm.
     *
     * @api-version 1
     * @user
     */
    open(uniqueId: number, mode: TcpCommunicationMode, ipAddress:string, portIndex: number) : Promise<TcpCommunicationResult>;

    /**
     * Close TCP comm
     * @param  uniqueId Unique id.
     *
     * @return errorType: ErrorType, result: Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    close(uniqueId: number) : Promise<TcpCommunicationResult>;

    /**
     * Query server information
     * @param  uniqueId Unique id.
     *
     * @return errorType: ErrorType, result: {@link TcpCommunicationServerInfo}
     *
     * @api-version 1
     * @user
     */
    queryServerInfo(uniqueId: number) : Promise<TcpCommunicationServerInfo>;

    /**
     * Query server information
     * @param uniqueId Unique id.
     * @param clientId Client id
     *
     * @return errorType: ErrorType, result: {@link TcpCommunicationClientInfo}
     *
     * @api-version 1
     * @user
     */
    queryClientInfo(uniqueId: number, clientId: number) : Promise<TcpCommunicationClientInfo>;

    /**
     * Write data using client socket
     * @param uniqueId Unique id.
     * @param data The data to be sent.
     *
     * @return errorType: ErrorType, result: Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    sendToServer(uniqueId: number, data:Uint8Array|string): Promise<boolean>;

    /**
     * Write data using server socket
     * @param uniqueID Unique id.
     * @param clientID client id.
     * @param data The data to be sent
     *
     * @return errorType: ErrorType, result: Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    sendToClient(uniqueID: number, clientId: number, data:Uint8Array|string): Promise<boolean>;
}

/**
 * ISerial have api and monitoring data variable. These elements are related to Serial communication function.
 *
 * @api-version 1
 * @user
 */
export interface ISerial {
    /**
     * {@link Monitorable}
     * Serial data Updated
     *
     * @api-version 1
     * @user
     */
    readonly serialDataUpdated: Monitorable<{uniqueId:number, data:Uint8Array}>;

    /**
     * {@link Monitorable}
     * Serial Connection Status Updated
     *
     * @api-version 1
     * @user
     */
    readonly serialConnectionStatusUpdated: Monitorable<{serialPort:string, status:number}>;

    /**
     * Flange's Serial X1 Type
     *
     * @api-version 2
     * @user
     */
    readonly flangeSerialX1Type: Monitorable<FlangeSerialCommunicationConfig>;

    /**
     * Flange's Serial X2 Type
     *
     * @api-version 2
     * @user
     */
    readonly flangeSerialX2Type: Monitorable<FlangeSerialCommunicationConfig>;

    /**
     * Flange Version 1
     * Opens the Flange Serial communication port.
     *
     * @param  baudrate Communication speed (Baudrate 2400, 4800, 9600, 19200, 38400, 57600, 115200 etc)
     * - `default` 115200
     * @param  baudrate Communication speed (Baudrate)
     * @param  byteSize Size of byte
     * @param  parityBit Parity bit
     * @param  stopBit Stop bit
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     * @deprecated Use {@link flangeSerialOpenOn} instead.
     */
    flangeSerialOpen(baudrate: number, byteSize: ByteSize, parityBit: ParityCheck, stopBit: StopBit) : Promise<boolean>;

    /**
     * Flange Version 2
     * Opens the Flange Serial communication port.
     *
     * @param  portIndex Flange Analog Port {@link GpioFlangePortIndex}
     * @param  baudrate Communication speed
     * - `default` 115200
     * @param  byteSize Size of byte {@link FlangeByteSize}
     * @param  parityBit Parity bit {@link ParityCheck}
     * @param  stopBit Stop bit {@link StopBit}
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    flangeSerialOpenOn(portIndex: GpioFlangePortIndex, baudrate: number, byteSize: FlangeByteSize, parityBit: ParityCheck, stopBit: StopBit) : Promise<boolean>;

    /**
     * Flange Version 1
     * Close the Flange Serial communication port.
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     * @deprecated Use {@link flangeSerialCloseOn} instead.
     */
    flangeSerialClose() : Promise<boolean>;

    /**
     * Flange Version 2
     * Close the Flange Serial communication port for flange version 2
     *
     * @param  portIndex Flange Analog Port {@link GpioFlangePortIndex}
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    flangeSerialCloseOn(portIndex: GpioFlangePortIndex) : Promise<boolean>;

    /**
     * Flange Version 2
     * data transfer through flange serial communication port.
     * Sends data via Flange Serial communication port at the robot controller.
     *
     * @param  portIndex Flange Analog Port {@link GpioFlangePortIndex}
     * @param  data Data
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    flangeSerialWriteOn(portIndex: GpioFlangePortIndex, data: Uint8Array|string) : Promise<boolean>;

    /**
     * Flange Version 2
     * Receive data via flange serial communication port. Waits for a response for the timeout time.
     *
     * @param  portIndex Flange Analog Port {@link GpioFlangePortIndex}
     * @param  timeout Time out time(millisecond). If -1, wait indefinitely. `default` -1
     *
     * @return Promise<Uint8Array> The flange serial read data.
     *
     * @api-version 2
     * @user
     */
    flangeSerialReadOn(portIndex: GpioFlangePortIndex, timeout: number) : Promise<Uint8Array>;

    /**
     * Open the Serial communication port.
     * @param uniqueId Unique ID
     * @param serialPort port name.
     * @param baudrate Communication speed (Baudrate)
     * @param byteSize Size of byte
     * @param parityBit Parity bit
     * @param stopBit Stop bit
     * @param timeout timeout
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    open(uniqueId: number, serialPort: string, baudrate: number, byteSize: ByteSize, parityBit: ParityCheck, stopBit: StopBit, timeout:number) : Promise<SerialCommunicationResult>;

    /**
     * Close the Serial communication port.
     * @param uniqueId Unique ID
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    close(uniqueId: number) : Promise<SerialCommunicationResult>;

    /**
     * Query serial Comm information
     * @param  uniqueId Unique id.
     *
     * @return errorType: ErrorType, result: {@link SerialCommunicationConfig}
     *
     * @api-version 1
     * @user
     */
    queryCommInfo(uniqueId: number) : Promise<SerialCommunicationConfig>;

    /**
     * Query all serial Comm information
     *
     * @return errorType: ErrorType, result: {@link SerialCommunicationConfig}
     *
     * @api-version 1
     * @user
     */
    queryAllCommInfo(): Promise<{result:number, count:number, serialConfig:SerialCommunicationConfig}>;

    /**
     * Send data
     * @param uniqueId Unique id.
     * @param serialData data.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    write(uniqueId: number, serialData: Uint8Array|string) : Promise<SerialCommunicationResult>;
}

/**
 * focas connect request& response commnon struct
 *
 *  **Remarks**
 * - The connection request does not use the Control handle value (NULL processing)
 * - In case of Timeout Value, 10 is recommended in normal 100Mb/s environment. (Relevant Grounds: FOCAS Manual)
 * @api-version 1
 * @user
 */
export type FocasConnect = {
    /**
     * Error Code
     *
     * @api-version 1
     * @user
     */
    errorCode: number;
    /**
     * IP Address
     * 16 byte of fixed string
     *
     * @api-version 1
     * @user
     */
    ipAddress: string;
    /**
     * Port
     * Port Number - Default port is 8193
     *
     * @api-version 1
     * @user
     */
    portIndex: number;
    /**
     * Handle number
     * Control handle value-handle of FOCAS Library
     *
     * @api-version 1
     * @user
     */
    handle: number;
    /**
     * TimeOut
     * Timeout Value-infinite waiting in case of 0. [unit:sec]
     *
     * @api-version 1
     * @user
     */
    timeout: number;
};

/**
 * focas disconnect request& response commnon struct
 *
 *  **Remarks**
 * - Error code is not used when releasing the connection (NULL processing)
 * @api-version 1
 * @user
 */
export type FocasDisconnect = {
    /**
     * Error Code
     *
     * @api-version 1
     * @user
     */
    errorCode: number;
    /**
     * Handle number
     *
     * @api-version 1
     * @user
     */
    handle: number;
};

/**
 * focas pmc data
 *
 * @api-version 1
 * @user
 */
export type FocasPmcData = {
    /**
     * PMC data (bool type)
     *
     * @api-version 1
     * @user
     */
    pmcDataBool: boolean;
    /**
     * PMC data (char type)
     *
     * @api-version 1
     * @user
     */
    pmcDataChar: FiveNumArray;
    /**
     * PMC data (shout type)
     *
     * @api-version 1
     * @user
     */
    pmcDataShort: FiveNumArray;
    /**
     * PMC data (long type)
     *
     * @api-version 1
     * @user
     */
    pmcDataLong: FiveNumArray;
    /**
     * PMC data (float type)
     *
     * @api-version 1
     * @user
     */
    pmcDataFloat: FiveNumArray;
    /**
     * PMC data (double type)
     *
     * @api-version 1
     * @user
     */
    pmcDataDouble: FiveNumArray;
};

/**
 * focas pmc Information
 *
 * **Remarks**
 *  - data address type is G,F, Y, X, A, R, T, K, C, D, M, N, E, Z(Case insensitive)
 *      - G: Output signal from PMC to CNC
 *      - F: Input signal to PMC from CNC
 *      - Y: Output signal to PMC from machine
 *      - X: Input signal from PMC to machine
 *      - A: Message display
 *      - R: Internal Relay
 *      - T: Timer
 *      - K: Keep relay
 *      - C: Counter
 *      - D: data table
 *      - M: Input signal from other PMC path
 *      - N: Output signal to other PMC path
 *      - E: Extra relay
 *      - Z: System relay
 * - Error code is not used when releasing the connection (NULL processing)
 * @api-version 1
 * @user
 */
export type FocasPmc = {
    /**
     * Error Code
     *
     * @api-version 1
     * @user
     */
    errorCode: number;
    /**
     * Handle number of FOCAS Library
     *
     * @api-version 1
     * @user
     */
    handle: number;
    /**
     * data Type
     * 0:char, 1:short, 2:int, 4:float, 5:double, 6:bit
     *
     * @api-version 1
     * @user
     */
    dataType: number;
    /**
     * Address Type
     * one string(Case insensitive), exam : "g", "d"...
     *
     * @api-version 1
     * @user
     */
    addressType: string;
    /**
     * data starting address- Range: 0 ~ 9999
     *
     * @api-version 1
     * @user
     */
    startAddressNumber: number;
    /**
     * Count
     * Number of data to be read- Maximum: 5
     *
     * @api-version 1
     * @user
     */
    count: number; // read&write datacnt
    /**
     * Bit Offset
     *
     * @api-version 1
     * @user
     */
    bitOffset: number;
    /**
     * PMC data
     *
     * @api-version 1
     * @user
     */
    data: FocasPmcData;
};

/**
 * focas cnc Information
 *
 * @api-version 1
 * @user
 */
export type FocasCncParameter = {
    /**
     * Handle number
     *
     * @api-version 1
     * @user
     */
    handle: number;
    /**
     * Parameter Number
     *
     * @api-version 1
     * @user
     */
    paramNumber: number;
    /**
     * Axis Number
     *
     * @api-version 1
     * @user
     */
    axisNumber: number;
    /**
     * data Length
     *
     * @api-version 1
     * @user
     */
    dataLength: number;
};

/**
 * focas cnc Response Information
 *
 * @api-version 1
 * @user
 */
export type ResponseFocasCncParameter = {
    /**
     * Error Code
     *
     * @api-version 1
     * @user
     */
    errorCode: number;
    /**
     * Handle number
     *
     * @api-version 1
     * @user
     */
    handle: number;
    /**
     * data Number
     *
     * @api-version 1
     * @user
     */
    dataNumber: number;
    /**
     * data Type
     *
     * @api-version 1
     * @user
     */
    dataType: number;
    /**
     * data (number array type)
     *
     * @api-version 1
     * @user
     */
    data: number[];
};

/**
 * focas program number Information
 *
 * @api-version 1
 * @user
 */
export type FocasProgramNumber = {
    /**
     * Error Code
     *
     * @api-version 1
     * @user
     */
    errorCode: number;
    /**
     * Handle number
     *
     * @api-version 1
     * @user
     */
    handle: number;
    /**
     * Running Program Number
     *
     * @api-version 1
     * @user
     */
    runningProgramNumber: number;
    /**
     * Main Program Number
     *
     * @api-version 1
     * @user
     */
    mainProgramNumber: number;
};

/**
 * focas error string information
 *
 * @api-version 1
 * @user
 */
export type FocasErrorString = {
    /**
     * Handle number
     *
     * @api-version 1
     * @user
     */
    handle: number;
    /**
     * Error Code
     *
     * @api-version 1
     * @user
     */
    errorCode: number;
    /**
     * Error Message (256 byte fixed string)
     *
     * @api-version 1
     * @user
     */
    errorMessage: string;
};

/**
 * focas connection state information
 *
 * @api-version 1
 * @user
 */
export type FocasIsAlive = {
    /**
     * Handle number
     *
     * @api-version 1
     * @user
     */
    handle: number;
    /**
     * response number
     * 0: disconnect, 1: connect
     *
     * @api-version 1
     * @user
     */
    response: number;
};

/**
 * result of focas query information
 *
 * @api-version 2
 * @user
 */
export type FocasQueryInfo = {
    /**
     * The number of data in the list.
     *
     * @api-version 2
     * @user
     */
    connectionCount: number;
    /**
     * list of focas informations
     *
     * @api-version 2
     * @user
     */
    connectionInfo: FocasConnection[];
};

/**
 * focas information
 *
 * @api-version 2
 * @user
 */
export type FocasConnection = {
    /**
     * ip adress
     *
     * @api-version 2
     * @user
     */
    ipAddress: string;
    /**
     * port number
     *
     * @api-version 2
     * @user
     */
    port: number;
    /**
     * Handle number
     *
     * @api-version 2
     * @user
     */
    handle: number;
};

/**
 * IFocas have api and monitoring data variable. These elements are related to Focas communication function.
 *
 * @api-version 1
 * @user
 */
export interface IFocas {
    /**
     * Connect to FOCAS. Makes a communication connection with Machine tool by using FOCAS Library.
     *
     * @param params {@link FocasConnect}
     * @return Return <Promise> Fulfills with the {@link FocasConnect}.
     *
     * @api-version 1
     * @user
     */
    connect(params: FocasConnect): Promise<FocasConnect>;

    /**
     * Disconnect from FOCAS. Releases the communication connection with Machine Tool by using FOCAS Library.
     *
     * @param params {@link FocasDisconnect}
     * @return Return <Promise> Fulfills with the {@link FocasDisconnect}.
     *
     * @api-version 1
     * @user
     */
    disconnect(params: FocasDisconnect): Promise<FocasDisconnect>;

    /**
     * Reads pmc data of FOCAS. Delivers the PMC data reading request of Machine tool by using FOCAS Library.
     *
     * @param params {@link FocasPmc}
     * @return Return <Promise> Fulfills with the {@link FocasPmc}.
     *
     * @api-version 1
     * @user
     */
    readPmcData(params: FocasPmc): Promise<FocasPmc>;

    /**
     * Read cnc parameter of FOCAS
     *
     * @param params {@link FocasCncParameter}
     * @return Return <Promise> Fulfills with the {@link ResponseFocasCncParameter}.
     *
     * @api-version 1
     * @user
     */
    readCncParameter(params: FocasCncParameter): Promise<ResponseFocasCncParameter>;

    /**
     * Get program Number of FOCAS
     *
     * @param handle Communication specific control constant value required for use of FOCAS
     * @return Return <Promise> Fulfills with the {@link FocasProgramNumber}.
     *
     * @api-version 1
     * @user
     */
    getProgramNumber(handle: number): Promise<FocasProgramNumber>;

    /**
     * Get errorCode & error message. Acquires the facts and figures (or details) of the error numbers that happened in the FOCAS Library.
     *
     * @param params {@link FocasErrorString}
     * @return Return <Promise> Fulfills with the {@link FocasErrorString}.
     *
     * @api-version 1
     * @user
     */
    getErrorString(params: FocasErrorString): Promise<FocasErrorString>;

    /**
     * Get connection state
     *
     * @param handle Communication specific control constant value required for use of FOCAS
     * @return Return <Promise> Fulfills with the {@link FocasIsAlive}.
     *
     * @api-version 1
     * @user
     */
    isAlive(handle: number): Promise<FocasIsAlive>;

    /**
     * Get query info
     *
     * @return Return <Promise> Fulfills with the {@link FocasQueryInfo}.
     *
     * @api-version 2
     * @user
     */
    queryInfo(): Promise<FocasQueryInfo>;
}

/**
 * IEthernetIP have api and monitoring data variable. These elements are related to Ethernet IP communication function.
 *
 * @api-version 1
 * @user
 * @deprecated
 */
export interface IEthernetIP {
    /**
     * {@link Monitorable}
     * {@link EthernetIpMonitoring}
     *
     * @api-version 1
     * @user
     * @deprecated
     */
    readonly ieSlave: Monitorable<EthernetIpMonitoring>;

    /**
     * Setting whether to monitor industrial Ethernet status
     * @param start monitoring 0: stop 1: start
     * @return Promise<boolean> returns true if successful, false if unsuccessful.
     *
     * @api-version 1
     * @system
     * @deprecated
     */
    setMonitoring(start: boolean): Promise<boolean>;

    /**
     * Get an industrial ethernet protocol general purpose register value
     *
     * @param gprType data type. 0:bit, 1:int, 2:float
     * @param gprAddress address
     * @param portType 0:in, 1:out
     * @return Return <Promise> Fulfills with the {@link EthernetIpData}.
     *
     * @api-version 1
     * @user
     * @deprecated
     */
    getInputRegisterBit(gprType: EthernetIpGprDataType, gprAddress: number, portType: number) : Promise<EthernetIpData>;

    /**
     * Set an industrial ethernet protocol general purpose register value.
     * <br>Controls and alters the Industrial Ethernet GPR output.
     *
     * @param gprType data type. 0:bit, 1:int, 2:float
     * @param gprAddress Variable address
     * @param data Variable output data- 128 byte string
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     * @deprecated
     */
    setOutputRegisterBit(gprType: EthernetIpGprDataType, gprAddress: number, data: string) : Promise<boolean>;
}

/**
 * IIndustrialEthernet have api and monitoring data variable. These elements are related to Industrial Ethernet communication function.
 *
 * @api-version 2
 * @user
 */
export interface IIndustrialEthernet {
    /**
     * {@link Monitorable}
     * {@link IEMonitoring}
     *
     * @api-version 2
     * @user
     */
    readonly ieSlave: Monitorable<IEMonitoring>;

    /**
     * Setting whether to monitor industrial Ethernet status
     * @param start monitoring 0: stop 1: start
     * @return Promise<boolean> returns true if successful, false if unsuccessful.
     *
     * @api-version 2
     * @system
     */
    setMonitoring(start: boolean): Promise<boolean>;

    /**
     * Get an industrial ethernet protocol general purpose register value
     *
     * @param gprType data type. 0:bit, 1:int, 2:float
     * @param gprAddress address
     * @param portType 0:in, 1:out
     * @return Return <Promise> Fulfills with the {@link EthernetIpData}.
     *
     * @api-version 2
     * @user
     */
    getInputRegister(gprType: IEGprDataType, gprAddress: number, portType: number) : Promise<IEData>;

    /**
     * Set an industrial ethernet protocol general purpose register value.
     * <br>Controls and alters the Industrial Ethernet GPR output.
     *
     * @param gprType data type. 0:bit, 1:int, 2:float
     * @param gprAddress Variable address
     * @param data Variable output data- 128 byte string
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    setOutputRegister(gprType: IEGprDataType, gprAddress: number, data: string) : Promise<boolean>;
}

/**
 * IModbus have api and monitoring data variable. These elements are related to Modbus ommunication function.
 *
 * @api-version 1
 * @user
 */
export interface IModbus {
    /**
     * {@link Monitorable} Modbus data
     *
     * @api-version 1
     * @user
     */
    readonly modbusData: Monitorable<{ symbol: string, value: number }[]>;

    /**
     * ModbusTCP have device connection using ModbusTCP communication
     * For example, setting that Write Coil, Write Register, Write Multiple Coil etc...
     *
     * @api-version 1
     * @user
     */
    tcp: IModbusTCP

    /**
     * ModbusRTU have device connection using ModbusRTU communication
     * For example, setting that Write Coil, Write Register, Write Multiple Coil etc...
     *
     * @api-version 1
     * @user
     */
    rtu: IModbusRTU
}

/**
 * IModbus have api and monitoring data variable. These elements are related to Modbus communication function.
 *
 * @api-version 1
 * @user
 */
export interface IModbusGeneral {
    /**
     * Outputs signal to the Modbus Input/Output signal contact at the robot controller.
     *
     * @param symbol Name of modbus
     * @param value Modbus digital I/O: 0 or 1, <br>Modbus analog I/O: data
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    setModbusOutput(symbol: string, value: number): Promise<boolean>

    /**
     * Controls and changes multi way printout of the user-defined-input/output signal in order to use ModbusRTU communication because of the characteristic of the I/O extension and synchronization target.
     *
     * @summary Modbus I/O 신호의 다중 출력을 제어 및 변경
     * @param symbol I/O id of 26 byte
     * @param registerCount Number of I/O output (maximum 100)
     * @param registerValue Array of I/O output values
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    setModbusMultiOutput(symbol: string, registerCount: number, registerValue: number[]): Promise<boolean>

    /**
     * Sets multiple Modbus output signal at once at the robot controller.
     * @summary Modbus I/O 출력 신호 여러 개를 한번에 설정
     * @param count number of output signals (up to 8)
     * @param registerList array of setting data pair(Name, Value)
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    setModbusOutputs(count: number, registerList: ModbusInfo[]): Promise<boolean>

    /**
     * This is a function to check the signal of the Modbus I/O signal contact in the robot controller.
     *
     * @param symbol I/O name- Modbus I/O signal name (31 bytes)
     * @return Return <Promise> Fulfills with Modbus I/O signal.
     *
     * **Remarks**
     * - I/O name item is the signal name of user-defined 31 byte Modbus I/O. In order to define Modbus I/O signal, minimum three information is needed including IP address of Modbus equipment, Register type, and register number etc., but because for programming and monitoring, it is impossible to use and identify the signal by using all of these, user-defined name is made and used.
     *
     * @api-version 1
     * @user
     */
    getModbusInput(symbol: string): Promise<number>

    /**
     * Get a list of all defined modbuses.
     *
     * @return Return <Promise> Fulfills with {@link ModbusDataList}.
     *
     * @api-version 1
     * @user
     */
    queryModbusDataList(): Promise<ModbusDataList>

    /**
     * Deletes the Modbus Input/Output signal information which was registered in advance at the robot controller.
     *
     * @summary Deleting Modbus I/O signal information registered in advance in the robot controller
     * @param symbol Name of registered modbus signal
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    delModbusSignal(symbol: string): Promise<boolean>

    /**
     * Deletes the user-defined-input/output signal of target equipment in order to use ModbusRTU (FC15 (multiple coils)/16 (multiple holding registers)).
     *
     * @summary 사용자가 정의한 Modbus I/O 신호를 삭제
     * @param  symbol I/O name- I/O id of 26 byte
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * **Remarks**
     * - Multiple I/O which are set as identifiers are deleted at once.
     * - FC15: multiple coils/ FC16: multiple holding registers
     * @api-version 1
     * @user
     */
    delModbusMultiSignal(symbol: string): Promise<boolean>
}

/**
 * IModbusRTU have api and monitoring data variable. These elements are related to Modbus RTU communication function.
 *
 * @api-version 1
 * @user
 */
export interface IModbusRTU extends IModbusGeneral {
    /**
     * Adds and defines Modbus RTU Signal
     *
     * @summary 모드버스 RTU I/O 정의(추가)
     * @param  symbol I/O id name of 26 byte
     * @param  serialPort Serialport of 16 byte
     * @param  slaveId Slave ID
     * @param  baudrate Communication speed (Baudrate)
     * @param  byteSize Size of byte
     * @param  parityBit Parity bit
     * @param  stopBit Stop bit
     * @param  registerType I/O property information (0~3)
     * @param  registerIndex I/O Identification number (0~ 65535)
     * @param  registerValue I/O output
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    addModbusSignal(symbol: string, serialPort: string, slaveId: number, baudrate: number, byteSize: number, parityBit: string, stopBit: number, registerType: ModbusRegisterType, registerIndex: number, registerValue: number): Promise<boolean>

    /**
     * Adds and defines Modbus RTU Signal without registerValue
     *
     * @summary 모드버스 RTU I/O 정의(추가)
     * @param  symbol I/O id name of 26 byte
     * @param  serialPort Serialport of 16 byte
     * @param  slaveId Slave ID
     * @param  baudrate Communication speed (Baudrate)
     * @param  byteSize Size of byte
     * @param  parityBit Parity bit
     * @param  stopBit Stop bit
     * @param  registerType I/O property information (0~3)
     * @param  registerIndex I/O Identification number (0~ 65535)
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 3
     * @user
     */
    addModbusSignal(symbol: string, serialPort: string, slaveId: number, baudrate: number, byteSize: number, parityBit: string, stopBit: number, registerType: ModbusRegisterType, registerIndex: number): Promise<boolean>

    /**
     * Adds Modbus RTU Mutli Signal.
     * Distinguishes and monitors the Input/Output signal of targeted equipment in case Modbus(FC15/16) communication should be used.
     *
     * @summary ModbusRTU (FC15/16)통신을 사용하여야 하는 경우, 대상 장비의 I/O 신호를 식별 및 모니터링
     * @param symbol I/O id name of 26 byte
     * @param serialPort Serialport of 16 byte
     * @param slaveId Slave ID
     * @param baudrate Communication speed (Baudrate)
     * @param byteSize Size of byte
     * @param parityBit Parity bit
     * @param stopBit Stop bit
     * @param registerType I/O property information (0~3)
     * @param registerIndex I/O Identification number (0~ 65535)
     * @param registerCount I/O output
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    addModbusMultiSignal(symbol: string, serialPort: string, slaveId: number, baudrate: number, byteSize: number, parityBit: string, stopBit: number, registerType: ModbusRegisterType, registerIndex: number, registerCount: number): Promise<boolean>

    /**
     * Search Modbus RTU Serial Device List
     *
     * @summary Serial로 연결된 Device 장치 검색
     * @return Return {@link SerialPortList}
     *
     * @api-version 1
     * @user
     */
    getSerialPortList(): Promise<SerialPortList>;
}

/**
 * IModbusTCP have api and monitoring data variable. These elements are related to Modbus TCP communication function.
 *
 * @api-version 1
 * @user
 */
export interface IModbusTCP extends IModbusGeneral {
    /**
     * add modbus signal function.
     * Enrolls the Input/Output signal of Modbus in advance. The Modbus Input/Output signal information must be reset after rebooting because it is saved in memory.  However, in the case the information is registered at the T/P application, it can be reused because it is added in the reset process.
     *
     * @param symbol signal name
     * @param ipAddress master`s ip address
     * @param portIndex master`s port number
     * @param registerType registry type
     * @param registerIndex registry index
     * @param registerValue registry value
     * @param slaveId slave Id
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    addModbusSignal(symbol: string, ipAddress: string, portIndex: number, registerType: ModbusRegisterType, registerIndex: number, registerValue: number, slaveId: number): Promise<boolean>

    /**
     * add modbus signal function without registerValue.
     * Enrolls the Input/Output signal of Modbus in advance. The Modbus Input/Output signal information must be reset after rebooting because it is saved in memory.  However, in the case the information is registered at the T/P application, it can be reused because it is added in the reset process.
     *
     * @param symbol signal name
     * @param ipAddress master`s ip address
     * @param portIndex master`s port number
     * @param registerType registry type
     * @param registerIndex registry index
     * @param slaveId slave Id
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 3
     * @user
     */
    addModbusSignal(symbol: string, ipAddress: string, portIndex: number, registerType: ModbusRegisterType, registerIndex: number, slaveId: number): Promise<boolean>

    /**
     * Add Modbus Multi Signal
     *
     * @param symbol I/O Name-26 byte of I/O identification name
     * @param ipAddress Equipment address-IP address of target equipment
     * @param portIndex Port number-Port number of target equipment
     * @param slaveId Slave ID-Slave ID (0~255)
     * @param registerType I/O Property-I/O property information (0~3)
     * @param registerIndex I/O Number-I/O Starting number (0~ 65535)
     * @param registerCount The number of I/O- Value for the number of I/O (0~100)
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * **Remarks**
     * - I/O name item is used to identify Modbus I/O signal on programming and monitoring etc., and special characters (e.g. *, &, [,{ etc.) cannot be used.
     * - Equipment address uses 15 Bytes Dotted-decimal Notation, and can assign target equipment to maximum five. The port number is 502 default.
     * - I/O property can be assigned as the following chart according to the data type and property.
     *  - Discrete Inputs: Only Reading
     *  - Coils: Reading/Writing
     *  - Input Registers: Only Reading
     *  - Holding Registers: Reading/Writing
     *  - Means the data type about the modbus protocol.
     * - Discrete Inputs: Digital Input
     * - Coils: Digital Output
     * - Input Registers: 2 bytes Input
     * - Holding Registers: 2 bytes Input/ Output
     * @api-version 1
     * @user
     */
    addModbusMultiSignal(symbol: string, ipAddress: string, portIndex: number, slaveId: number, registerType: ModbusRegisterType, registerIndex: number, registerCount: number): Promise<boolean>
}

/**
 * IDio have api and monitoring data variable. These elements are related to Modbus Digital I/O communication function.
 *
 * @api-version 1
 * @user
 */
export interface IDigitalIO {
    /**
     * Digital Input data (Controller).
     *
     * @api-version 1
     * @user
     */
    readonly input: Monitorable<TwentyNumArray>;

    /**
     * switch input data (Controller).
     *
     * @api-version 1
     * @user
     */
    readonly switchInput: Monitorable<ThreeNumArray>;

    /**
     * Safety Input data (Controller).
     *
     * @api-version 1
     * @user
     */
    readonly safetyInput: Monitorable<ThreeNumArray>;

    /**
     * Flange's Input data
     *
     * @api-version 1
     * @user
     */
    readonly flangeInput: Monitorable<SixNumArray>;

    /**
     * Digital Output data (Controller).
     *
     * @api-version 1
     * @user
     */
    readonly output: Monitorable<SixteenNumArray>;

    /**
     * Flange's Output data
     *
     * @api-version 1
     * @user
     */
    readonly flangeOutput: Monitorable<SixNumArray>;

    /**
     * Flange's Output Voltage level
     *
     * @api-version 1
     * @user
     */
    readonly flangeOutputVoltage: Monitorable<GpioDigitalVoltage>;

    /**
     * Flange's Output X1 BJT Type
     *
     * @api-version 1
     * @user
     */
    readonly flangeOutputX1Type: Monitorable<GpioDigitalType>;

    /**
     * Flange's Output X2 BJT Type
     *
     * @api-version 1
     * @user
     */
    readonly flangeOutputX2Type: Monitorable<GpioDigitalType>;

    /**
     * Flange's Safety data(servo off)
     *
     * @api-version 2
     * @user
     */
    readonly flangeServoSafetyMode: Monitorable<FlangeInterlockServoOff>;

    /**
     * Flange's Safety data(Interrupt)
     *
     * @api-version 2
     * @user
     */
    readonly flangeInterruptSafetyMode: Monitorable<FlangeInterlockInterrupted>;

    /**
     * get digital input signal On/Off info. (Flange)(0~5) / (Controller)(0~15)
     *
     * @param type
     * @return SixNumArray
     *
     * @api-version 1
     * @user
     */
    getDigitalInput(type: GpioTypeIndex): TwentyNumArray | SixNumArray

    /**
     * set digital input signal value.
     *
     * @param type
     * @param gpioIndex
     * @param on
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     */
    setDigitalInput(type: GpioTypeIndex, gpioIndex: GpioControlBoxDigitalIndex | GpioFlangeDigitalIndex, signalOn: boolean): Promise<boolean>;

    /**
     * get digital output signal On/Off info. (Flange)(0~5) / (Controller)(0~19)
     *
     * @param type
     * @return SixNumArray
     *
     * @api-version 1
     * @user
     */
    getDigitalOutput(type: GpioTypeIndex): SixteenNumArray | SixNumArray

    /**
     * set digital output signal value.
     *
     * @param type
     * @param gpioIndex
     * @param on
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     */
    setDigitalOutput(type: GpioTypeIndex, gpioIndex: GpioControlBoxDigitalIndex | GpioFlangeDigitalIndex, signalOn: boolean): Promise<boolean>

    /**
     * set digital output voltage
     *
     * @param type
     * @param voltage voltage level 0: 0v, 1: 12v, 2: 24v
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     * @deprecated Use {@link setFlangeOutputVoltage} instead. this function is not working.
     */
    setDigitalOutputVoltage(type: GpioTypeIndex, voltage: GpioDigitalVoltage): Promise<boolean>;

    /**
     * set digital flange output voltage
     *
     * @param voltage voltage level 0: 0v, 1: 12v, 2: 24v
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 2
     * @system
     */
    setFlangeOutputVoltage(voltage: GpioDigitalVoltage): Promise<boolean>;

    /**
     * set digital output type
     *
     * @param type
     * @param portIndex 1: X1, 2: X2
     * @param digitalType 0: PNP, 1: NPN
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     * @deprecated Use {@link setFlangeDigitalOutputType}. this function is not working.
     */
    setDigitalOutputType(type: GpioTypeIndex, portIndex: GpioFlangePortIndex, digitalType: GpioDigitalType): Promise<boolean>;

    /**
     * set Flange digital output type
     *
     * @param portIndex {@link GpioFlangePortIndex}
     * @param digitalType {@link GpioDigitalType}
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 2
     * @system
     */
    setFlangeDigitalOutputType(portIndex: GpioFlangePortIndex, digitalType: GpioDigitalType): Promise<boolean>;

    /**
     * set digital outputs (multi set Digital Outputs)
     *
     * @param type {@link GpioTypeIndex}
     * @param count ioInfo count
     * @param ioInfo digital output setting value.
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     */
    setDigitalOutputs(type: GpioTypeIndex, count: number, ioInfo: GpioPort[]): Promise<boolean>;

    /**
     * set flange digital output safety
     *
     * @param servo {@link FlangeInterlockServoOff}
     * @param interrupt {@link FlangeInterlockInterrupted}
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 2
     * @system
     */
    setFlangeDigitalOutputPowerOptionBySafety(servo: FlangeInterlockServoOff, interrupt: FlangeInterlockInterrupted): Promise<boolean>;
}

/**
 * IAio have api and monitoring data variable. These elements are related to Modbus Analog I/O communication function.
 *
 * @api-version 1
 * @user
 */
export interface IAnalogIO {
    /**
     * Analog Input data (Controller).
     *
     * @api-version 1
     * @user
     */
    readonly input: Monitorable<TwoNumArray>;

    /**
     * Analog Input type (Controller).
     *
     * @api-version 1
     * @user
     */
    readonly inputType: Monitorable<[GpioAnalogType, GpioAnalogType]>;

    /**
     * Analog Output data (Controller).
     *
     * @api-version 1
     * @user
     */
    readonly output: Monitorable<TwoNumArray>;

    /**
     * Analog Output type (Controller).
     *
     * @api-version 1
     * @user
     */
    readonly outputType: Monitorable<[GpioAnalogType, GpioAnalogType]>;

    /**
     * Analog Output data (Flange).
     *
     * @api-version 1
     * @user
     */
    readonly flangeInput: Monitorable<FourNumArray>;

    /**
     * Analog Output type (Flange).
     *
     * @api-version 1
     * @user
     */
    readonly flangeInputType: Monitorable<[GpioAnalogType, GpioAnalogType, GpioAnalogType, GpioAnalogType]>;

    /**
     * X1 Analog Input Pin Mode(Flange).
     *
     * @api-version 1
     * @user
     */
    readonly flangeInputX1PinMode: Monitorable<FlangeAnalogPinMode>;

    /**
     * X2 Analog Input Pin Mode(Flange).
     *
     * @api-version 1
     * @user
     */
    readonly flangeInputX2PinMode: Monitorable<FlangeAnalogPinMode>;

    /**
     * get analog input value.
     *
     * @param type
     * @return Return <Promise> Fulfills with an analog value
     *
     * @api-version 1
     * @user
     */
    getAnalogInput(type: GpioTypeIndex, ): TwoNumArray | FourNumArray;


    /**
     * set analog input signal value.
     *
     * @param type
     * @param gpioIndex
     * @param value
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     */
    setAnalogInput(type: GpioTypeIndex, gpioIndex: GpioControlBoxAnalogIndex | GpioFlangeAnalogIndex, value: number): Promise<boolean>;


    /**
     * set analog input type
     *
     * @param type
     * @param gpioIndex
     * @param analogType 0: Current, 1: Voltage
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     */
    setAnalogInputType(type: GpioTypeIndex, gpioIndex: GpioControlBoxAnalogIndex | GpioFlangeAnalogIndex, analogType: GpioAnalogType): Promise<boolean> ;

    /**
     * set analog output signal value.
     *
     * @param type
     * @param gpioIndex
     * @param value
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     */
    setAnalogOutput(type: GpioTypeIndex, gpioIndex: GpioControlBoxAnalogIndex | GpioFlangeAnalogIndex, value: number): Promise<boolean> ;


    /**
     * set analog output type
     *
     * @param type
     * @param gpioIndex
     * @param analogType 0: Current, 1: Voltage
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     */
    setAnalogOutputType(type: GpioTypeIndex, gpioIndex: GpioControlBoxAnalogIndex | GpioFlangeAnalogIndex, analogType: GpioAnalogType): Promise<boolean> ;

    /**
     * get analog input type.
     *
     * @param type
     * @return Return <Promise> Fulfills with an analog value
     *
     * @api-version 1
     * @user
     */
    getAnalogInputType(type: GpioTypeIndex): [GpioAnalogType,GpioAnalogType,GpioAnalogType,GpioAnalogType] | [GpioAnalogType,GpioAnalogType];

    /**
     * get analog output value.
     *
     * @param type
     * @return Return <Promise> Fulfills with an analog value
     *
     * @api-version 1
     * @user
     */
    getAnalogOutput(type: GpioTypeIndex): TwoNumArray ;

    /**
     * get analog output type.
     *
     * @param type
     * @return Return <Promise> Fulfills with an analog value
     *
     * @api-version 1
     * @user
     */
    getAnalogOutputType(type: GpioTypeIndex): [GpioAnalogType,GpioAnalogType]

    /**
     * Get flange analog pin mode.
     *
     * @param pinIndex flange pin index. it can't be X1, X2.
     * @return Return <Promise> Fulfills with an {@link FlangeAnalogPinMode}
     *
     * @api-version 1
     * @user
     */
    getFlangeAnalogInputPinMode(pinIndex: GpioFlangePortIndex) : FlangeAnalogPinMode

    /**
     * Set flange analog pin mode.
     *
     * @param pinIndex The port index to set the mode. {@link GpioFlangePortIndex}
     * @param pinMode Mode type to set {@link FlangeAnalogPinMode}
     * @return Return <Promise> Fulfills with an {@link FlangeAnalogPinMode}
     *
     * @api-version 1
     * @system
     */
    setFlangeAnalogInputPinMode(pinIndex: GpioFlangePortIndex, pinMode: FlangeAnalogPinMode): Promise<boolean>
}

/**
 * Variable type for monitoring
 *
 * @api-version 1
 * @user
 */
export type MonitoringVariable = {
    /**
     * system:0,  global: 1
     *
     * @api-version 1
     * @user
     */
    division: 0 | 1;

    /**
     * bool: 0, int: 1, flaot: 2, string: 3, posj: 4, posx: 5, list: 6, unknonwn: 7
     *
     * @api-version 1
     * @user
     */
    type: SystemVariableType;

    /**
     * Variable name
     *
     * @api-version 1
     * @user
     */
    name: string;

    /**
     * Default value
     * "True" / "1" / "1.2" / "text" / posj(1,2,3,4,5,6) / posx(1,2,3,4,5,6) / [1,2,3]
     *
     * @api-version 1
     * @user
     */
    data: string | undefined;
};

/**
 * Sub DRL program data
 *
 * @api-version 1
 * @user
 */
export type SubProgram = {
    /**
     * File Name
     *
     * @api-version 1
     * @user
     */
    fileName: string;

    /**
     * DRL program as string.
     *
     * @api-version 1
     * @user
     */
    script: string;
};

/**
 * Program timer to retrieve total and cycle time.
 *
 * @api-version 1
 * @user
 */
export interface IProgramTimer {
    /**
     * Register a listener to receive a total time when it changed.
     *
     * @api-version 1
     * @user
     */
    registerTotalTimeListener(context: Context, listener: (time: number) => void): void;
    /**
     * Register a listener to receive a cycle time when it changed.
     *
     * @api-version 1
     * @user
     */
    registerCycleTimeListener(context: Context, listener: (time: number) => void): void;
    /**
     * Unregister a listener which has been registered through {@link registerTotalTimeListener}.
     *
     * @api-version 1
     * @user
     */
    unregisterTotalTimeListener(context: Context, listener: (time: number) => void): void;
    /**
     * Unregister a listener which has been registered through {@link registerCycleTimeListener}.
     *
     * @api-version 1
     * @user
     */
    unregisterCycleTimeListener(context: Context, listener: (time: number) => void): void;
}

/**
 * This is a type that refers to the running program information.
 *
 * @api-version 1
 * @user
 */
export type RunningProgramInfo = {
    /**
     * A package name of module who is requester of the running program.
     *
     * @api-version 1
     * @user
     */
    packageName: string,
    /**
     * A screen's id who is requester of the running program.
     *
     * @api-version 1
     * @user
     */
    screenId: string,
    /**
     * A timer to retrieve total and cycle time.
     *
     * @api-version 1
     * @user
     */
    timer: IProgramTimer,
    /**
     * A number of program cycles.
     *
     * @api-version 1
     * @user
     */
    cycleCount: number,
    /**
     * Whether to run in debug mode.
     *
     * @api-version 1
     * @user
     */
    debug: boolean
}

/**
 * IProgramManager have executing DRL APIs.
 * For example,  etc...
 *
 * @api-version 1
 * @user
 */
export interface IProgramManager extends ISystemManager {
    /**
     * {@link Monitorable} {@link ProgramState}.
     *
     * @api-version 1
     * @user
     */
    readonly programState: Monitorable<ProgramState>;

    /**
     * {@link Monitorable} {@link ProgramStopCause}.
     *
     * @api-version 1
     * @user
     */
    readonly programStopCause: Monitorable<ProgramStopCause>;

    /**
     * {@link Monitorable} {@link ProgramExecuteLine}
     *
     * @api-version 1
     * @user
     */
    readonly programExecuteLine: Monitorable<{ lineNumber: number, elapseTime: number, fileName: string }>;

    /**
     * {@link Monitorable} {@link RunningProgramInfo}
     *
     * @api-version 1
     * @user
     */
    readonly runningProgramInfo: Monitorable<RunningProgramInfo>;

    /**
     * {@link Monitorable} for 'tp_log' DRL.
     *
     * @api-version 1
     * @user
     */
    readonly userLog: Monitorable<string>;

    /**
     * {@link Monitorable} for 'tp_get_user_input' DRL.
     *
     * @api-version 1
     * @user
     */
    readonly userInputPopup: Monitorable<{ type: UserInputType, text: string }>;

    /**
     * {@link Monitorable} for 'tp_popup' DRL.
     *
     * @api-version 1
     * @user
     */
    readonly userPopup: Monitorable<{ text: string, level: UserPopupLevel, buttonType: UserPopupButtonType }>;

    /**
     * {@link Monitorable} for 'message_to_dp' DRL.
     *
     * @api-version 2
     * @user
     */
    readonly userEvent: Monitorable<{ eventName: string, data: string }>;

    /**
     * {@link Monitorable} for 'wait_nudge' DRL.
     *
     * @api-version 1
     * @user
     */
    readonly waitNudge: Monitorable<boolean>;

    /**
     * {@link Monitorable} for 'wait_manual_guide' DRL.
     *
     * @api-version 1
     * @user
     */
    readonly waitHandGuide: Monitorable<boolean>;

    /**
     * {@link Monitorable} for monitoring Variable
     *
     * @api-version 1
     * @user
     */
    readonly monitoringVariables: Monitorable<MonitoringVariable[]>;

     /**
      * {@link Monitorable} for error hanlding state monitoring information
      *
      * @api-version 2
      * @user
      */
    readonly errorHandlingStatus: Monitorable<{state:ErrorHandlingState, mode:ErrorHandlingMode}>;

    /**
     * Get current program state.
     *
     * @return Current program state {@link ProgramState}.
     *
     * @api-version 1
     * @user
     */
    getProgramState(): Promise<ProgramState>

    /**
     * Request to run program.
     *
     * @param mainProgram Main DRL program data as string.
     * @param subPrograms Sub DRL program data as array.
     * @param monitoringVariables An array of variables which are needed to monitoring.
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    runProgram(mainProgram: string, subPrograms: SubProgram[] | null, monitoringVariables: MonitoringVariable[] | null, useDebug: boolean): Promise<boolean>

    /**
     * Request to run program with properties.
     *
     * @param program DRL program data as string.
     * @param props Additional options.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 3
     * @system
     */
    runProgramWithProps(program: string, props?: { subPrograms?: SubProgram[], monitoringVariables?: MonitoringVariable[], useDebug?: boolean, manualMode?: boolean }): Promise<boolean>;

    /**
     * Request to pause program.
     *
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    pauseProgram(): Promise<boolean>

    /**
     * Request to resume program.
     *
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    resumeProgram(): Promise<boolean>

    /**
     * Request to stop program.
     *
     * @param stopType program stop type {@link ProgramStopType}
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    stopProgram(stopType: ProgramStopType): Promise<boolean>

    /**
     * Executes the DRL program from the current line to the specified number of lines at once.
     *
     * @param lines number of step lines
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    stepRunProgram(lines: number): Promise<boolean>

    /**
     * Request to check DRL Syntax. A logAlarm pop-up if there is a drl syntax problem.
     *
     * @param script DRL script as string.
     *
     * @api-version 1
     * @user
     */
    checkSyntax(script: string): Promise<boolean>

    /**
     * Add a break point.
     *
     * @param line line number
     *
     * @api-version 1
     * @user
     */
    addBreakPoint(line: number): Promise<boolean>

    /**
     * Add a brake point to the sub program.
     *
     * @param line line number
     * @param fileName sub program file name
     *
     * @api-version 3
     * @user
     */
    addBreakPointSubProgram(line: number, fileName: string): Promise<boolean>

    /**
     * Delete a break point.
     *
     * @param line line number
     *
     * @api-version 1
     * @user
     */
    deleteBreakPoint(line: number): Promise<boolean>

    /**
     * Delete a brake point to the sub program.
     *
     * @param line line number
     * @param fileName sub program file name
     *
     * @api-version 3
     * @user
     */
    deleteBreakPointSubProgram(line: number, fileName: string): Promise<boolean>

    /**
     * Reset the brake points.
     *
     * @api-version 1
     * @user
     */
    resetBreakPoint(): Promise<boolean>

    /**
     * Reset the brake points to the sub program.
     *
     * @param fileName sub program file name
     *
     * @api-version 3
     * @user
     */
    resetBreakPointSubProgram(fileName: string): Promise<boolean>

    /**
     * Save subprogram data which will be loaded and used in the main program to the Controller.
     * The data will be deleted automatically after running DRL program.
     * To prevent duplication of program names between modules, the {@link programName} must start with the requester's package name which has been replaced from dot (".") to underscore ("_").
     * For example, when a module whose package name is 'dart.module.xxx' tries to save a subprogram, the program name must start with 'dart_module_xxx' (ex. dart_module_xxx_mycommand).
     *
     * @param mode {@link ProgramSaveMode} for the program data
     * @param programName Program name. The name will be used to load the program in main program. The name must start with the requester's package name which has been replaced from dot (".") to underscore ("_").
     * @param program Program data which is written by DRL.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    saveSubProgram(mode: ProgramSaveMode, programName: string, program?: string): Promise<boolean>

    /**
     * Register a callback to intercept sub programs.
     * This function should be used for only system features (i.e. Task Editor's export).
     *
     * @api-version 1
     * @system
     */
    registerSubProgramInterceptor(interceptor: (program: string) => void, targetProgramNames: string[]): void;

    /**
     * Unregister the interceptor callback.
     *
     * @api-version 1
     * @system
     */
    unregisterSubProgramInterceptor(interceptor: (program: string) => void): void;

    /**
     * After 'tp_popup' ({@link userPopup}) drl-command during DRL program operation, it ends and resumes the next paused program.
     *
     * @param resume true: resume, false: stop
     *
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    sendUserPopupResponse(resume: boolean): Promise<boolean>

    /**
     * After 'tp_get_user_input' ({@link userInputPopup}) drl-command during DRL program operation, it ends and resumes the next paused program.
     *
     * @param userInput user input value
     *
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    sendUserInputPopupResponse(userInput: string): Promise<boolean>

    /**
     * After 'message_to_dp' ({@link userEvent}) drl-command during DRL program operation, it ends and resumes the next paused program.
     *
     * @param eventName Event name to send to DRL program.
     * @param data Data to transfer to DRL program.
     *
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    sendUserEventResponse(eventName: string, data: string): Promise<boolean>

    /**
     * After entering the direct teaching mode by the 'wait_manual_guide' drl-command during DRL program operation, it ends and resumes the next paused program.
     *
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    sendWaitHandGuideResponse(): Promise<boolean>

    /**
     * After entering the nudge mode by the 'wait_nudge' drl-command during DRL program operation, it ends and resumes the next paused program.
     *
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    sendWaitNudgeResponse(): Promise<boolean>
}

/**
 * IAuthorityManager have APIs for managing authority.
 *
 * @api-version 1
 * @user
 */
export interface IAuthorityManager extends ISystemManager {
    /**
     * {@link Monitorable} {@link AuthorityState}.
     *
     * @api-version 1
     * @user
     */
    readonly authorityState: Monitorable<AuthorityState>;
}

/**
 * IMeasureManager have APIs for calculation and measurement.
 *
 * @api-version 1
 * @user
 */
export interface IMeasureManager extends ISystemManager {
    /**
     * Get robot install pose.
     * <br> This is integration version of auto measure command of robot installation pose information and Safety mode setting command. Measures and calculates the pose information that the robot is installed.
     * <br> Unlike the other APIs, this API has a separate timeout time. (10 minutes)
     *
     * @return Return <Promise> Fulfills with the {@link ConfigInstallPose}.
     *
     * @api-version 1
     * @user
     */
    measureInstallPose(): Promise<ConfigInstallPose>

    /**
     * Calibrate the JTS sensor installed on each axis of the robot and return the calibration value.
     * <br> Arranges the correction data for error correction on JTS(Joint Torque Sensor) which is installed in each axis.
     * <br> Unlike the other APIs, this API has a separate timeout time. (10 minutes)
     *
     * @return Return <Promise> Fulfills with the {@link JtsParameterData}.
     *
     * @api-version 1
     * @user
     */
    measureJTSValue(): Promise<JtsParameterData>

    /**
     * Calibrate the FTS sensor and return the calibration value.
     * <br> Unlike the other APIs, this API has a separate timeout time. (10 minutes)
     *
     * @return Return FTS Calibration Result. This value is an offset value.
     *
     * @api-version 1
     * @user
     */
    measureFTSValue(): Promise<SixNumArray>

    /**
     * Measure the friction coefficient of each axis of the robot and return the result value. (Safe Command)
     * <br> Unlike other APIs, this API's timeout is set flexibly according to the input parameters.
     *
     * @param type 0: Check motion, 1: Measure Motion
     * @param select Select the axis to measure. 0: unselect, 1: select
     * @param start Measurement start joint value of each axis. (degree)
     * @param range Measuring joint range of each axis. (degree)
     * @return Return FTS Calibration Result. This value is an offset value.
     *
     * @api-version 1
     * @user
     */
    measureFrictionValue(type: number, select:SixNumArray, start:SixNumArray, range:SixNumArray): Promise<FrictionValueResult>

    /**
     * Save the friction coefficient of each axis of the robot and return the result value. (Safe Command)
     *
     * @param targetFriction The axis selected to measure. 0: unselect, 1: select
     * @param positiveSpeedFactor Measured Positive Speed Factor of each joint.
     * @param negativeSpeedFactor Measured Negative Speed Factor of each joint.
     * @param temperature Measured temperature of each joint.
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    setFrictionCompensation(targetFriction : SixNumArray, positiveSpeedFactor : FourSixNumArray, negativeSpeedFactor : FourSixNumArray, temperature : SixNumArray): Promise<boolean>

    /**
     * Measure the tcp coordinate
     * <br> Unlike the other APIs, this API has a separate timeout time. (3 minutes)
     *
     * @param targetReference Reference Coordinate. 0: Base, 1: Tool
     * @param targetPose1 Reference Position
     * @param targetPose2 Reference Position
     * @param targetPose3 Reference Position
     * @param targetPose4 Reference Position
     * @return Return Calibration Result. {@link TcpCoordinateCalculationResult}
     *
     * @api-version 1
     * @user
     */
    measureTCP(targetReference: 0 | 1, targetPose1: SixNumArray, targetPose2: SixNumArray, targetPose3: SixNumArray, targetPose4: SixNumArray): Promise<TcpCoordinateCalculationResult>

    /**
     * Measure the tcp coordinate
     * <br> Unlike the other APIs, this API has a separate timeout time. (3 minutes)
     *
     * @param targetReference Reference Coordinate. 0: Base, 1: Tool
     * @param targetPose1 Reference Position
     * @param targetPose2 Reference Position
     * @param targetPose3 Reference Position
     * @param targetPose4 Reference Position
     * @param orientationType The OrientatioType of result. If not set, it is {@link OrientationType.EULER_ZYX}
     * @return Return Calibration Result. {@link TcpCoordinateCalculationResult}
     *
     * @api-version 2
     * @user
     */
    measureTCP(targetReference: 0 | 1, targetPose1: ManipulatorPose, targetPose2: ManipulatorPose, targetPose3: ManipulatorPose, targetPose4: ManipulatorPose, orientationType?:OrientationType): Promise<TcpCoordinateCalculationResult>

    /**
     * Measure the tool weight
     * <br> Unlike the other APIs, this API has a separate timeout time. (mode(0): 10 minutes, mode(1): 5 minutes)
     *
     * @param mode 0: Use 2~6 axis, 1: Use 4~6 axis
     * @param weight exact weight value. If you don't know, enter -999.
     * @param exactCogX The x-value of the exact center of gravity. If you don't know, enter -999.
     * @param exactCogY The y-value of the exact center of gravity. If you don't know, enter -999.
     * @param exactCogZ The z-value of the exact center of gravity. If you don't know, enter -999.
     * @return Return Calibration Result. {@link MeasureToolResponse}
     *
     * @api-version 1
     * @user
     */
    measureToolWeight(mode: number, weight: number, exactCogX: number, exactCogY: number, exactCogZ: number,): Promise<MeasureToolResponse>
}

/**
 * IArcweldingManager have APIs for arc welding application
 *
 * @api-version 2
 * @user
 */
 export interface IArcweldingManager extends ISystemManager {
    /**
     * Set the A contact (NO: Normally Open), B contact (NC: Normally Close) and input channel of the welder output signal.
     *
     * @param arcOnChannel Arc channel. If it is -1, it is not used.
     * @param arcOnContact switch relay contact
     * @param gasOnChannel Gas channel. If it is -1, it is not used.
     * @param gasOnContact switch relay contact
     * @param wireOnChnnel Wire channel. If it is -1, it is not used.
     * @param wireOnContact switch relay contact
     * @return Return true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    setWeldSignalContactStatus(arcOnChannel:-1|GpioControlBoxDigitalIndex, arcOnContact:SwitchRelayContact, gasOnChannel:-1|GpioControlBoxDigitalIndex, gasOnContact:SwitchRelayContact, wireOnChnnel:-1|GpioControlBoxDigitalIndex, wireOnContact:SwitchRelayContact): Promise<boolean>;
}
// [END] Robot Control System API


// [START] Network Control System API /////////////////////////
/**
 * INetworkManager checks the state of being able to connect to an external network.
 *
 * @api-version 1
 * @user
 */
export interface INetworkManager extends ISystemManager {
    /**
     * {@link Monitorable} Whether network is online or not.
     *
     * @api-version 2
     * @user
     */
    readonly online: Monitorable<boolean>;

    /**
     * Check Network Connection
     *
     * @return  Result: If the network is available, return true, or false.
     *
     * @api-version 1
     * @user
     */
    isNetworkAvailable(): Promise<boolean>;

    /**
     * Check URL Reachable
     *
     * @return  Result: If the URL is reachable, return true, or false.
     *
     * @api-version 1
     * @user
     */
    isReachableURL(url:string): Promise<boolean>;
}
// [END] Network Control System API /////////////////////////


// [START] Data Control System API /////////////////////////
/**
 * Contracts for {@link DeviceSettingsTableContracts.TABLE_NAME}.
 *
 * @api-version 1
 * @user
 */
 export const DeviceSettingsTableContracts = {
    /**
     * Table name.
     *
     * @api-version 1
     * @user
     */
    TABLE_NAME: "deviceSettings",
    /**
     * Column name for uniqueId. uniqueId is generated automatically by system when you call {@link IDartDatabase.insertDeviceSetting}.
     *
     * @api-version 1
     * @user
     */
    COLUMN_UUID: "uniqueId",
    /**
     * Column name for device name (i.e. gripper's name).
     *
     * @api-version 1
     * @user
     */
    COLUMN_DEVICE_NAME: "deviceName",
    /**
     * Column name for alias name about the setting (i.e. Grasp, Release, etc)
     *
     * @api-version 1
     * @user
     */
    COLUMN_ALIAS_NAME: "aliasName",
    /**
     * Column name for setting type.
     * Please refer to {@link DeviceSettingDataType} for available types.
     *
     * @api-version 1
     * @user
     */
    COLUMN_TYPE: "type",
    /**
     * Column name for data.
     * The string data is converted from an object composed of key and value pairs via {@link JSON.stringify}.
     * The object structure is different for each {@link COLUMN_TYPE}.
     * Please refer to {@link DeviceSettingData} for available data structure.
     *
     * @api-version 1
     * @user
     */
    COLUMN_DATA: "data",
} as const;
/**
 * @ignore
 */
export type DeviceSettingsTableContracts = typeof DeviceSettingsTableContracts[keyof typeof DeviceSettingsTableContracts];

/**
 * Types that can be used in {@link DeviceSettingsTableContracts.COLUMN_TYPE}
 *
 * @api-version 2
 * @user
 */
export const DeviceSettingDataType = {
    /**
     * Digital input.
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.dio.input} data structures.
     *
     * @api-version 2
     * @user
     */
    DIGITAL_INPUT:1001,
    /**
     * Digital output.
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.dio.output} data structures.
     *
     * @api-version 2
     * @user
     */
    DIGITAL_OUTPUT:1002,
    /**
     * Analog input.
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.aio.input} data structures.
     *
     * @api-version 2
     * @user
     */
    ANOALOG_INPUT:1003,
    /**
     * Analog output
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.aio.output} data structures.
     *
     * @api-version 2
     * @user
     */
    ANOALOG_OUTPUT:1004,
    /**
     * Modbus TCP Set.
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.modbusTCP.set} data structures.
     *
     * @api-version 2
     * @user
     */
    MODBUS_TCP_SET:2001,
    /**
     * Modbus TCP Get.
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.modbusTCP.get} data structures.
     *
     * @api-version 2
     * @user
     */
    MODBUS_TCP_GET:2002,
    /**
     * Modbus RTU Set.
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.modbusRTU.set} data structures.
     *
     * @api-version 2
     * @user
     */
    MODBUS_RTU_SET:2003,
    /**
     * Modbus RTU Get.
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.modbusRTU.get} data structures.
     *
     * @api-version 2
     * @user
     */
    MODBUS_RTU_GET:2004,
    /**
     * TCP Client Wrtie
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.tcpClient.write} data structures.
     *
     * @api-version 2
     * @user
     */
    TCP_CLIENT_WRITE:3001,
    /**
     * TCP Client Read
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.tcpClient.read} data structures.
     *
     * @api-version 2
     * @user
     */
    TCP_CLIENT_READ:3002,
    /**
     * TCP Server Wrtie
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.tcpServer.write} data structures.
     *
     * @api-version 2
     * @user
     */
    TCP_SERVER_WRITE:3003,
    /**
     * TCP Server Read
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.tcpServer.read} data structures.
     *
     * @api-version 2
     * @user
     */
    TCP_SERVER_READ:3004,
    /**
     * Serial Write
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.serial.write} data structures.
     *
     * @api-version 2
     * @user
     */
    SERIAL_WRITE:4001,
    /**
     * Serial Read
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.serial.read} data structures.
     *
     * @api-version 2
     * @user
     */
    SERIAL_READ:4002,
    /**
     * Industrial Ethernet Set
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.industrialEthernet.set} data structures.
     *
     * @api-version 2
     * @user
     */
    IE_SET:5001,
    /**
     * Industrial Ethernet Get
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.industrialEthernet.get} data structures.
     *
     * @api-version 2
     * @user
     */
    IE_GET:5002,
    /**
     * Focas write
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.focas.write} data structures.
     *
     * @api-version 2
     * @user
     */
    FOCAS_WRITE:6001,
    /**
     * Focas read
     * {@link DeviceSettingsTableContracts.COLUMN_DATA} must use {@link DeviceSettingData.focas.read} data structures.
     *
     * @api-version 2
     * @user
     */
    FOCAS_READ:6002,
} as const;

/**
 * @ignore
 */
 export type DeviceSettingDataType = typeof DeviceSettingDataType[keyof typeof DeviceSettingDataType];

/**
 * The type of data to put in {@link DeviceSettingsTableContracts.COLUMN_DATA}
 *
 * @api-version 2
 * @user
 */
export namespace DeviceSettingData {
    /**
     * Digital IO
     *
     * @api-version 2
     * @user
     */
    export namespace dio {
        export type input = {
            /**
             * The number of signals
             *
             * @api-version 2
             * @user
             */
            count:number,
            /**
             * Signal Informations
             *
             * @api-version 2
             * @user
             */
            signals: {
                /**
                 * {@link GpioTypeIndex}
                 *
                 * @api-version 2
                 * @user
                 */
                type: number,
                /**
                 * {@link GpioControlBoxDigitalIndex} or {@link GpioFlangeDigitalIndex}
                 *
                 * @api-version 2
                 * @user
                 */
                gpioIndex: number,
            }[],
        }
        export type output = {
            /**
             * The number of signals
             *
             * @api-version 2
             * @user
             */
             count:number,

            /**
             * Signal Informations
             *
             * @api-version 2
             * @user
             */
            signals: {
                /**
                 * {@link GpioTypeIndex}
                 *
                 * @api-version 2
                 * @user
                 */
                type: number,
                /**
                 * {@link GpioControlBoxDigitalIndex} or {@link GpioFlangeDigitalIndex}
                 *
                 * @api-version 2
                 * @user
                 */
                gpioIndex: number,
                /**
                 * signal on/off
                 *
                 * @api-version 2
                 * @user
                 */
                signalOn: boolean
            }[],
        }
    }
    /**
     * Analog IO
     *
     * @api-version 2
     * @user
     */
    export namespace aio  {
        export type input = {
            /**
             * The number of signals
             *
             * @api-version 2
             * @user
             */
             count:number,
             /**
              * Signal Informations
              *
              * @api-version 2
              * @user
              */
             signals: {
                 /**
                  * {@link GpioTypeIndex}
                  *
                  * @api-version 2
                  * @user
                  */
                 type: number,
                 /**
                  * {@link GpioControlBoxAnalogIndex} or {@link GpioFlangeAnalogIndex}
                  *
                  * @api-version 2
                  * @user
                  */
                 gpioIndex: number,
                 /**
                  * {@link GpioAnalogType}
                  *
                  * @api-version 2
                  * @user
                  */
                 analogType: number,
             }[],

        }
        export type output = {
            /**
             * The number of signals
             *
             * @api-version 2
             * @user
             */
            count:number,
             /**
              * Signal Informations
              *
              * @api-version 2
              * @user
              */
            signals: {
                /**
                 * {@link GpioTypeIndex}
                 *
                 * @api-version 2
                 * @user
                 */
                type: number,
                /**
                 * {@link GpioControlBoxAnalogIndex} or {@link GpioFlangeAnalogIndex}
                 *
                 * @api-version 2
                 * @user
                 */
                gpioIndex: number,
                /**
                 * {@link GpioAnalogType}
                 *
                 * @api-version 2
                 * @user
                 */
                analogType: number,
                /**
                 * greater than 0 and and less than 10
                 *
                 * @api-version 2
                 * @user
                 */
                value: number
            }[],
        }
    }
    /**
     * Modbus TCP Comm
     *
     * @api-version 2
     * @user
     */
    export namespace modbusTCP {
        export type set = {
            /**
             * ip address
             *
             * @api-version 2
             * @user
             */
            ipAddress: string,
            /**
             * port index
             *
             * @api-version 2
             * @user
             */
            portIndex: number,
            /**
             * slave id
             *
             * @api-version 2
             * @user
             */
            slaveId: number,
            /**
             * {@link ExtendModbusRegisterType}
             *
             * @api-version 2
             * @user
             */
            registerType: number,
            /**
             * register index
             *
             * @api-version 2
             * @user
             */
            registerIndex: number,
            /**
             * register count. default is 1
             * If this value is greater than 1, it is a multiple signal.
             *
             * @api-version 2
             * @user
             */
            registerCount: number,
            /**
             * initial register value.
             * It has at least one value and has data as many as {@link DeviceSettingData.modbusTCP.set.registerCount}.
             *
             * @api-version 2
             * @user
             */
            initialRegisterValue: number[],
            /**
             * register value.
             * It has at least one value and has data as many as {@link DeviceSettingData.modbusTCP.set.registerCount}.
             *
             * @api-version 2
             * @user
             */
            registerValue: number[],
        }
        export type get = {
            /**
             * ip address
             *
             * @api-version 2
             * @user
             */
            ipAddress: string,
            /**
             * port index
             *
             * @api-version 2
             * @user
             */
            portIndex: number,
            /**
             * slave id
             *
             * @api-version 2
             * @user
             */
            slaveId: number,
            /**
             * {@link ExtendModbusRegisterType}
             *
             * @api-version 2
             * @user
             */
            registerType: number,
            /**
             * register index
             *
             * @api-version 2
             * @user
             */
            registerIndex: number,
            /**
             * register count. default is 1
             * If this value is greater than 1, it is a multiple signal.
             *
             * @api-version 2
             * @user
             */
            registerCount: number,
        }
    }
    /**
     * Modbus RTU Comm
     *
     * @api-version 2
     * @user
     */
    export namespace modbusRTU {
        export type set = {
            /**
             * serial port name
             *
             * @api-version 2
             * @user
             */
            serialPort: string,
            /**
             * slave id
             *
             * @api-version 2
             * @user
             */
            slaveId: number,
            /**
             * baudrate
             *
             * @api-version 2
             * @user
             */
            baudrate: number,
            /**
             * byteSize {@link ByteSize}
             *
             * @api-version 2
             * @user
             */
            byteSize: number,
            /**
             * parity bit. "N":none, "O":odd, "E":even
             *
             * @api-version 2
             * @user
             */
            parityBit: string,
            /**
             * stop bit. {@link StopBit}
             *
             * @api-version 2
             * @user
             */
            stopBit: number,
            /**
             * {@link ExtendModbusRegisterType}
             *
             * @api-version 2
             * @user
             */
            registerType: number,
            /**
             * register index
             *
             * @api-version 2
             * @user
             */
            registerIndex: number,
            /**
             * register count. default is 1
             * If this value is greater than 1, it is a multiple signal.
             *
             * @api-version 2
             * @user
             */
            registerCount: number,
            /**
             * initial register value.
             * It has at least one value and has data as many as {@link DeviceSettingData.modbusTCP.set.registerCount}.
             *
             * @api-version 2
             * @user
             */
            initialRegisterValue: number[],
            /**
             * register value.
             * It has at least one value and has data as many as {@link DeviceSettingData.modbusTCP.set.registerCount}.
             *
             * @api-version 2
             * @user
             */
            registerValue: number[],
        }
        export type get = {
            /**
             * ip address
             *
             * @api-version 2
             * @user
             */
            serialPort: string,
            /**
             * slave id
             *
             * @api-version 2
             * @user
             */
            slaveId: number,
            /**
             * baudrate
             *
             * @api-version 2
             * @user
             */
            baudrate: number,
            /**
             * byteSize {@link ByteSize}
             *
             * @api-version 2
             * @user
             */
            byteSize: number,
            /**
             * parity bit. {@link ParityCheck}
             *
             * @api-version 2
             * @user
             */
            parityBit: number,
            /**
             * stop bit. {@link StopBit}
             *
             * @api-version 2
             * @user
             */
            stopBit: number,
            /**
             * {@link ExtendModbusRegisterType}
             *
             * @api-version 2
             * @user
             */
            registerType: number,
            /**
             * register index
             *
             * @api-version 2
             * @user
             */
            registerIndex: number,
            /**
             * register count. default is 1
             * If this value is greater than 1, it is a multiple signal.
             *
             * @api-version 2
             * @user
             */
            registerCount: number,
        }
    }
    /**
     * TCP Client Comm
     *
     * @api-version 2
     * @user
     */
    export namespace tcpClient {
        export type write = {
            /**
             * ip address
             *
             * @api-version 2
             * @user
             */
            ipAddress: string,
            /**
             * port No
             *
             * @api-version 2
             * @user
             */
            portIndex: number,
            /**
             * data
             *
             * @api-version 2
             * @user
             */
            data: number[],
        }
        export type read = {
            /**
             * ip address
             *
             * @api-version 2
             * @user
             */
            ipAddress: string,
             /**
              * port No
              *
              * @api-version 2
              * @user
              */
            portIndex: number,
        }
    }
    /**
     * TCP Server Comm
     *
     * @api-version 2
     * @user
     */
    export namespace tcpServer {
        export type write = {
            /**
             * port No
             *
             * @api-version 2
             * @user
             */
            portIndex: number,
            /**
             * port No
             *
             * @api-version 2
             * @user
             */
            data: number[],
        }
        export type read = {
            /**
             * port No
             *
             * @api-version 2
             * @user
             */
            portIndex: number,
        }
    }
    /**
     * Serial Comm
     *
     * @api-version 2
     * @user
     */
    export namespace serial {
        export type write = {
            /**
             * serial port name
             *
             * @api-version 2
             * @user
             */
            serialPort: string,
            /**
             * baudrate
             *
             * @api-version 2
             * @user
             */
            baudrate: number,
            /**
             * byteSize. {@link ByteSize)
             *
             * @api-version 2
             * @user
             */
            byteSize: string,
            /**
             * parity bit. "N":none, "O":odd, "E":even, "M":mark, "S":space
             *
             * @api-version 2
             * @user
             */
            parityBit: number,
            /**
             * stop bit. (1, 1.5, 2)
             *
             * @api-version 2
             * @user
             */
            stopBit: number,
            /**
             * data
             *
             * @api-version 2
             * @user
             */
            data: number[],
        }
        export type read = {
            /**
             * serial port name
             *
             * @api-version 2
             * @user
             */
            serialPort: string,
            /**
             * baudrate
             *
             * @api-version 2
             * @user
             */
            baudrate: number,
            /**
             * byteSize. {@link ByteSize)
             *
             * @api-version 2
             * @user
             */
            byteSize: string,
            /**
             * parity bit. "N":none, "O":odd, "E":even, "M":mark, "S":space
             *
             * @api-version 2
             * @user
             */
            parityBit: number,
            /**
             * stop bit. (1, 1.5, 2)
             *
             * @api-version 2
             * @user
             */
            stopBit: number,
        }
    }
    /**
     * Industrial Ethernet Comm
     *
     * @api-version 2
     * @user
     */
    export namespace industrialEthernet {
        export type set = {
            /**
             * The number of signals
             *
             * @api-version 2
             * @user
             */
            count: number,
             /**
              * Signal Informations
              *
              * @api-version 2
              * @user
              */
            signals: {
                /**
                 * type. 0:bit, 1:int, 2:float
                 *
                 * @api-version 2
                 * @user
                 */
                dataType: number,
                /**
                 * Output Bit GPR area address value of Industrial Ethernet Slave (bit:0-63, others:0-23)
                 *
                 * @api-version 2
                 * @user
                 */
                address: number,
                /**
                 * output value
                 *
                 * @api-version 2
                 * @user
                 */
                value: number
            }[],
        }
        export type get = {
            /**
             * The number of signals
             *
             * @api-version 2
             * @user
             */
            count: number,
             /**
              * Signal Informations
              *
              * @api-version 2
              * @user
              */
            signals: {
                /**
                 * type. 0:bit, 1:int, 2:float
                 *
                 * @api-version 2
                 * @user
                 */
                dataType: number,

                /**
                 * 0:Input port, 1:Output port
                 *
                 * @api-version 2
                 * @user
                 */
                portType: number,

                /**
                 * address
                 *
                 * @api-version 2
                 * @user
                 */
                address: number,
            }[],
        }
    }
    /**
     * Focas Comm
     *
     * @api-version 2
     * @user
     */
    export namespace focas {
        export type write = {
            /**
             * ip address
             *
             * @api-version 2
             * @user
             */
            ipAddress: string,
            /**
             * port No
             *
             * @api-version 2
             * @user
             */
            portIndex: number,
            /**
             * timeout. 0(wait indefinitely) or greater than 0
             *
             * @api-version 2
             * @user
             */
            timeout: number
            /**
             * address Type
             * G (Output signal from PMC to CNC), F (Input signal to PMC from CNC), Y (Output signal to PMC from machine), X (Input signal from PMC to machine), A (Message display), R (Internal relay), T (Timer), K (Keep relay), C (Counter), D (Data table), M (Input signal from other PMC path), N (Output signal to other PMC path), E (Extra relay), Z (System relay)
             *
             * @api-version 2
             * @user
             */
            addressType:string;
            /**
             * start address number (0 ~ 9999)
             *
             * @api-version 2
             * @user
             */
            startAddressNumber:number
            /**
             * bit offset (0 ~ 7(
             *
             * @api-version 2
             * @user
             */
            bitOffset:number
            /**
             * type. 0:bit(1bit), 1:char(1byte), 2:word(2byte), 3:long(4byte), 4:float(4byte), 5:double(8byte)
             *
             * @api-version 2
             * @user
             */
            dataType:number,
            /**
             * The data to be write. The bit type has only one data value.(length is 1) Other types send data as an array(less than 5).
             *
             * @api-version 2
             * @user
             */
            value:number[],
        }
        export type read = {
            /**
             * ip address
             *
             * @api-version 2
             * @user
             */
            ipAddress: string,
            /**
             * port No
             *
             * @api-version 2
             * @user
             */
            portIndex: number,
            /**
             * connection timeout. 0(wait indefinitely) or greater than 0
             *
             * @api-version 2
             * @user
             */
            timeout: number
            /**
             * address Type
             * G (Output signal from PMC to CNC), F (Input signal to PMC from CNC), Y (Output signal to PMC from machine), X (Input signal from PMC to machine), A (Message display), R (Internal relay), T (Timer), K (Keep relay), C (Counter), D (Data table), M (Input signal from other PMC path), N (Output signal to other PMC path), E (Extra relay), Z (System relay)
             *
             * @api-version 2
             * @user
             */
            addressType:string;
            /**
             * start address number (0 ~ 9999)
             *
             * @api-version 2
             * @user
             */
            startAddressNumber:number
            /**
             * bit offset (0 ~ 7(
             *
             * @api-version 2
             * @user
             */
            bitOffset:number
            /**
             * type. 0:bit(1bit), 1:char(1byte), 2:word(2byte), 3:long(4byte), 4:float(4byte), 5:double(8byte)
             *
             * @api-version 2
             * @user
             */
            dataType:number,
            /**
             * Length of data to read(less than 5). In case of bit type, this value is ignored.
             *
             * @api-version 2
             * @user
             */
            dataCount:number,
        }
    }
}

/**
 * A parent interface for DartDatabase. DartDatabase's interface should be inherited this interface.
 * With this interface, modules can Create, Insert, Update, Delete, Select database.
 *
 * The database is synchronized to the Controller by default.
 * If you want to create a database which is not synchronized, then you have to set options as '{ notSynchronized : true }' when you create a database. (default = false)
 * ```typescript
 * const db: IDartDatabase = this.moduleContext.getSystemLibrary(Context.DART_DATABASE, { notSynchronized: true });
 * ```
 *
 * @api-version 1
 * @user
 */
export interface IDartDatabase {
    /**
     * Create a new database table.
     *
     * @param tableName set database tableName.
     * @param columnNames set columns name.
     * @param isPublic set as public value which can be accessed from other modules.
     * @return Promise<boolean> return true if create a table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.getAllTableName();
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    createTable(tableName: string, columnNames: string[], isPublic: boolean): Promise<boolean>;

    /**
     * Get all existing table name.
     *
     * @return Promise<string[]> return all existing table names.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.getAllTableName();
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getAllTableName(): Promise<string[]>;

    /**
     * Whether a table of {@link tableName} is exists.
     *
     * @param tableName A table name to search.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.hasTable(TABLE_NAME);
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    hasTable(tableName: string): Promise<boolean>;

    /**
     * Get all columnNames from a table.
     *
     * @param tableName table name that you want to get column names.
     * @return Return column names list from the table name or null.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.getColumnNames(TABLE_NAME);
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    getColumnNames(tableName: string): Promise<string[]>;

    /**
     * Delete an existing table.
     *
     * @param tableName table name want to delete.
     * @return Promise<boolean> return true if delete the table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.deleteTable(TABLE_NAME);
     *          })
     *          .then(r => {
     *              return databaseLibrary.hasTable(TABLE_NAME);
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    deleteTable(tableName: string): Promise<boolean>;

    /**
     * Insert values into a table.
     *
     * @param tableName The table name in which the values are to be inserted.
     * @param values the values to be inserted into the table.
     * @return Return true if insert values to the table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.insert(TABLE_NAME, ["name", "Jone"]);
     *          })
     *          .then(r => {
     *              const projection = [COL_NAME, COL_DATA];
     *              const where = {[COL_NAME]:"name"};
     *              return databaseLibrary.query(TABLE_NAME, projection, where);
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    insert(tableName: string, values: any[]): Promise<boolean>;

    /**
     * Insert values more than one column to a table
     *
     * @param tableName The table name in which the values are to be inserted.
     * @param valuesArray the array of values to be inserted into the table.
     * @return Return true if insert all values to the table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.insertAll(TABLE_NAME, [["name":"Jone"], ["ip", "127.0.0.1"]]);
     *          })
     *          .then(r => {
     *              const projection = [COL_NAME, COL_DATA];
     *              const where = {[COL_NAME]:"ip"};
     *              return databaseLibrary.query(TABLE_NAME, projection, where);
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    insertAll(tableName: string, valuesArray: any[][]): Promise<boolean>;

    /**
     * Query to execute on its own module
     *
     * @param tableName The table name to execute query.
     * @param projection Column information about filtering results.
     * @param where Column name and data for filter records.
     * @return Return results of query.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.insert(TABLE_NAME, ["ip", "127.0.0.1"]);
     *          })
     *          .then(r => {
     *              const projection = [COL_NAME, COL_DATA];
     *              const where = {[COL_NAME]:"ip"};
     *              return databaseLibrary.query(TABLE_NAME, projection, where);
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    query(tableName: string, projection: string[], where: Record<string, any>): Promise<TableRow[]>;

    /**
     * Query to execute on its own module. Returns null if an error occurs.
     *
     * @param tableName The table name to execute query.
     * @param projection Column information about filtering results.
     * @param where Column name and data for filter records.
     * @return Return <Promise> Fulfills with results of query if the request has been operated successfully, otherwise {@link CommunicationError}.
     *
     * @api-version 3
     * @user
     **/
    queryWithError(tableName: string, projection: string[], where: Record<string, any>): Promise<{ data?: TableRow[], error?: CommunicationError }>;

    /**
     * Update Database values in a table
     *
     * @param tableName The table name in which the values are to be updated.
     * @param where Column name and data for filter records.
     * @param data Data list for update.
     * @return Return updated row count.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.insertAll(TABLE_NAME, [["name":"Jone"], ["ip", "127.0.0.1"]]);
     *          })
     *          .then(r => {
     *              const where = {[COL_NAME]:"ip"};
     *              const data = {[COL_DATA]: "192.168.137.100"};
     *              return databaseLibrary.update(TABLE_NAME, where, data);
     *          })
     *          .then(r => {
     *              const projection = [COL_NAME, COL_DATA];
     *              const where = {[COL_NAME]:"ip"};
     *              return databaseLibrary.query(TABLE_NAME, projection, where);
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    update(tableName: string, where: Record<string, any>, data: Record<string, any>): Promise<number>;

    /**
     * Delete a record.
     *
     * @param tableName The table name which want to be deleted.
     * @param where Column name and data for filter records.
     * @return Return deleted row count.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const TABLE_NAME = "dataTable";
     *          const COL_NAME = "name";
     *          const COL_DATA = "data";
     *          databaseLibrary.createTable(TABLE_NAME, [COL_NAME, COL_DATA], false)
     *          .then(r => {
     *              return databaseLibrary.insert(TABLE_NAME, ["name", "Jone"]);
     *          })
     *          .then(r => {
     *              const where = {[COL_NAME]:"name"};
     *              return databaseLibrary.delete(TABLE_NAME, where);
     *          })
     *          .then(r => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *          })
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    delete(tableName: string, where: Record<string, any>): Promise<number>;

    /**
     * Executes a SQL query.
     *
     * @param queryString The SQL query string to be executed.
     * @returns A Promise that resolves with the query result.
     *
     * @api-version 3
     * @user
     * @example
     * ```typescript
     *
     */
    run(queryString: string): Promise<boolean>;

    /**
     * Insert values into the {@link DeviceSettingsTableContracts.TABLE_NAME} table.
     * This is related with {@link Message.ACTION_DEVICE_SETTINGS_DATABASE_READER}.
     *
     * @param deviceName A device name.
     * @param aliasName An alias name.
     * @param type A type of setting.
     * @param data A string data is converted from an object composed of key and value pairs via {@link JSON.stringify}. The object structure is different for each {@link type}.
     * @return Return true if insert values to the table successfully, otherwise return false.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, DeviceSettingData, DeviceSettingsTableContracts as DTContracts } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const data = {count: 1, signals:[{type:0, gpioIndex:0, signalOn:true}]} as DeviceSettingData.dio.output;
     *          databaseLibrary.insertDeviceSetting("Gripper", "Grasp", DeviceSettingDataType.DIGITAL_OUTPUT, data)
     *          .then(r => {
     *              const projection = [DTContracts.COLUMN_TYPE, DTContracts.COLUMN_DEVICE_NAME, DTContracts.COLUMN_ALIAS_NAME, DTContracts.COLUMN_DATA];
     *              const where = {[DTContracts.COLUMN_DEVICE_NAME]:"Gripper"};
     *              return databaseLibrary.queryDeviceSetting(projection, where);
     *          })
     *          .then(rows => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(rows)}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    insertDeviceSetting(deviceName: string, aliasName: string, type: number, data: string): Promise<boolean>;

    /**
     * Query records from the {@link DeviceSettingsTableContracts.TABLE_NAME} table.
     *
     * @param projection Column information about filtering results.
     * @param where Column name and data for filter records.
     * @return Return results of query.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, DeviceSettingData, DeviceSettingsTableContracts as DTContracts } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const data = {count: 1, signals:[{type:0, gpioIndex:0, signalOn:true}]} as DeviceSettingData.dio.output;
     *          databaseLibrary.insertDeviceSetting("Gripper", "Grasp", DeviceSettingDataType.DIGITAL_OUTPUT, data)
     *          .then(r => {
     *              const projection = [DTContracts.COLUMN_TYPE, DTContracts.COLUMN_DEVICE_NAME, DTContracts.COLUMN_ALIAS_NAME, DTContracts.COLUMN_DATA];
     *              const where = {[DTContracts.COLUMN_DEVICE_NAME]:"Gripper"};
     *              return databaseLibrary.queryDeviceSetting(projection, where);
     *          })
     *          .then(rows => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(rows)}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    queryDeviceSetting(projection: string[], where: Record<string, any>): Promise<TableRow[]>;

    /**
     * Query records from the {@link DeviceSettingsTableContracts.TABLE_NAME} table. Returns null if an error occurs.
     *
     * @param projection Column information about filtering results.
     * @param where Column name and data for filter records.
     * @return Return <Promise> Fulfills with results of query if the request has been operated successfully, otherwise {@link CommunicationError}.
     *
     * @api-version 3
     * @user
     */
    queryDeviceSettingWithError(projection: string[], where: Record<string, any>): Promise<{ data?: TableRow[], error?: CommunicationError }>;

    /**
     * Update values in the {@link DeviceSettingsTableContracts.TABLE_NAME} table.
     *
     * @param where Column name and data for filter records.
     * @param data Data list for update.
     * @return Return updated row count.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, DeviceSettingData, DeviceSettingsTableContracts as DTContracts } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const data = {count: 1, signals:[{type:0, gpioIndex:0, signalOn:true}]} as DeviceSettingData.dio.output;
     *          databaseLibrary.insertDeviceSetting("Gripper", "Grasp", DeviceSettingDataType.DIGITAL_OUTPUT, data)
     *          .then(r => {
     *              const where = {[DTContracts.COLUMN_DEVICE_NAME]:"Gripper", [DTContracts.COLUMN_ALIAS_NAME]:"Grasp"};
     *              const changedData = {[DTContracts.COLUMN_ALIAS_NAME]:"Release"};
     *              return databaseLibrary.updateDeviceSetting(where, changedData);
     *          })
     *          .then(r => {
     *              const projection = [DTContracts.COLUMN_TYPE, DTContracts.COLUMN_DEVICE_NAME, DTContracts.COLUMN_ALIAS_NAME, DTContracts.COLUMN_DATA];
     *              const where = {[DTContracts.COLUMN_DEVICE_NAME]:"Gripper"};
     *              return databaseLibrary.queryDeviceSetting(projection, where);
     *          })
     *          .then(rows => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(rows)}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    updateDeviceSetting(where: Record<string, any>, data: Record<string, any>): Promise<number>;

    /**
     * Delete a record from the {@link DeviceSettingsTableContracts.TABLE_NAME} table.
     *
     * @param where Column name and data for filter records.
     * @return Return deleted row count.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, DeviceSettingData, DeviceSettingsTableContracts as DTContracts } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      useEffect(() => {
     *          const data = {count: 1, signals:[{type:0, gpioIndex:0, signalOn:true}]} as DeviceSettingData.dio.output;
     *          databaseLibrary.insertDeviceSetting("Gripper", "Grasp", DeviceSettingDataType.DIGITAL_OUTPUT, data)
     *          .then(r => {
     *              const where = {[DTContracts.COLUMN_DEVICE_NAME]:"Gripper", [DTContracts.COLUMN_ALIAS_NAME]:"Grasp"};
     *              return databaseLibrary.deleteDeviceSetting(where);
     *          })
     *          .then(r => {
     *              const projection = [DTContracts.COLUMN_TYPE, DTContracts.COLUMN_DEVICE_NAME, DTContracts.COLUMN_ALIAS_NAME, DTContracts.COLUMN_DATA];
     *              const where = {[DTContracts.COLUMN_DEVICE_NAME]:"Gripper"};
     *              return databaseLibrary.queryDeviceSetting(projection, where);
     *          })
     *          .then(rows => {
     *              Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(rows)}`);
     *          });
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    deleteDeviceSetting(where: Record<string, any>): Promise<number>;
}

/**
 * An interface for DartDatabase. It is used to query records of public table provided by another module.
 * You can get this through {@link IModulePackageManager.queryModuleDatabaseInfo}.
 *
 * @api-version 1
 * @user
 */
export interface IDartDatabaseReader {
    readonly tableName: string;

    /**
     * Get all columnNames.
     *
     * @return Return column names list from the table name or null.
     *
     * @api-version 1
     * @user
     */
    getColumnNames(): Promise<string[]>;

    /**
     * Query to execute on its own module
     *
     * @param projection Column information about filtering results.
     * @param where Column name and data for filter records.
     * @return Return results of query.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, IModulePackageManager } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      const packageManager = context.getSystemManager(Context.MODULE_PACKAGE_MANAGER) as IModulePackageManager;
     *      useEffect(() => {
     *          const message = new Message({
     *              action: Message.ACTION_USER_INFO_DATABASE_READER,
     *              category: Message.CATEGORY_DATABASE,
     *          });
     *          const columns = ["name", "ip"]
     *          const where {"name": "Jone"}
     *
     *          const resolveInfos = packageManager.queryModuleDatabaseInfo(message);
     *          for (const x of resolveInfos) {
     *              const reader = x.databaseInfo?.createDatabaseReader(context);
     *              reader?.query(columns, where)
     *              .then(r => {
     *                  Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *              });
     *          }
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    query(projection: string[], where: Record<string, any>): Promise<TableRow[]>;

    /**
     * Query to execute on its own module. Returns null if an error occurs.
     *
     * @param projection Column information about filtering results.
     * @param where Column name and data for filter records.
     * @return Return <Promise> Fulfills with results of query if the request has been operated successfully, otherwise {@link CommunicationError}.
     *
     * @api-version 3
     * @user
     **/
    queryWithError(projection: string[], where: Record<string, any>): Promise<{ data?: TableRow[], error?: CommunicationError }>;

    /**
     * Query records from the {@link DeviceSettingsTableContracts.TABLE_NAME} table.
     *
     * @param projection Column information about filtering results.
     * @param where Column name and data for filter records.
     * @return Return results of query.
     *
     * @api-version 1
     * @user
     * @example
     *  ```typescript
     *  import { IToast, Toast, ModuleContext, IDartDatabase, IModulePackageManager, DeviceSettingData, DeviceSettingsTableContracts as DTContracts } from "dart-api";
     *  export function MyComponent(props: {moduleContext:ModuleContext}){
     *      const context = props.moduleContext;
     *      const databaseLibrary = context.getSystemLibrary(Context.DART_DATABASE) as IDartDatabase;
     *      const packageManager = context.getSystemManager(Context.MODULE_PACKAGE_MANAGER) as IModulePackageManager;
     *      useEffect(() => {
     *          const message = new Message({
     *              action: Message.ACTION_DEVICE_SETTINGS_DATABASE_READER,
     *              category: Message.CATEGORY_DATABASE,
     *          });
     *          const columns = [
     *              DTContracts.COLUMN_UUID,
     *              DTContracts.COLUMN_DEVICE_NAME,
     *              DTContracts.COLUMN_ALIAS_NAME,
     *              DTContracts.COLUMN_TYPE,
     *              DTContracts.COLUMN_DATA,
     *          ];
     *          const where {[DTContracts.COLUMN_TYPE]: DeviceSettingDataType.DIGITAL_OUTPUT}
     *
     *          const resolveInfos = packageManager.queryModuleDatabaseInfo(message);
     *          for (const x of resolveInfos) {
     *              const reader = x.databaseInfo?.createDatabaseReader(context);
     *              reader?.queryDeviceSetting(columns, where)
     *              .then(r => {
     *                  Toast.show(IToast.TYPE_INFO, null, `${JSON.stringify(r)}`);
     *              });
     *          }
     *      }, []);
     *    return <>Please implement your code here.</>
     *  }
     */
    queryDeviceSetting(projection: string[], where: Record<string, any>): Promise<TableRow[]>;

    /**
     * Query records from the {@link DeviceSettingsTableContracts.TABLE_NAME} table. Returns null if an error occurs.
     *
     * @param projection Column information about filtering results.
     * @param where Column name and data for filter records.
     * @return Return <Promise> Fulfills with results of query if the request has been operated successfully, otherwise {@link CommunicationError}.
     *
     * @api-version 3
     * @user
     */
    queryDeviceSettingWithError(projection: string[], where: Record<string, any>): Promise<{ data?: TableRow[], error?: CommunicationError }>;
}

/**
 * A data interface result of query.
 *
 * @api-version 1
 * @user
 */
export type TableRow = {
    /**
     * Row's ID
     *
     * @api-version 1
     * @user
     */
    id: number;

    /**
     * A set of column and data pair.
     *
     * @api-version 1
     * @user
     */
    data: Record<string, any>
}

/**
 * This is an enumeration type constant that refers to error code of migrate data, and is defined as follows.
 *
 * @enum
 * @api-version 3
 * @system
 */
export const DartBridgeMigrateErrorCode = {
    /**
     * No error.
     *
     * @api-version 3
     * @system
     */
    NO_ERROR:               0x0000_0000,
    /**
     * Unknown error.
     *
     * @api-version 3
     * @system
     */
    UNKNOWN_ERROR:          0x0000_0001,
    /**
     * Canceled by user.
     *
     * @api-version 3
     * @system
     */
    CANCELED_BY_USER:       0x0000_0002,

    /**
     * Migrate file has been falsified.
     *
     * @api-version 3
     * @system
     */
    FILE_FALSIFIED:         0x0001_0000,
    /**
     * Failed to decompress.
     *
     * @api-version 3
     * @system
     */
    FAILED_TO_DECOMPRESS:   0x0001_0001,

    /**
     * Failed to migrate caused by 'mismatch robot model'.
     *
     * @api-version 3
     * @system
     */
    ROBOT_MODEL_MISMATCH:   0x0002_0000,
    /**
     * Failed to migrate caused by 'duplicated name of task file.'.
     *
     * @api-version 3
     * @system
     */
    NAME_DUPLICATED:        0x0002_0001
}
/**
 * @ignore
 */
export type DartBridgeMigrateErrorCode = typeof DartBridgeMigrateErrorCode[keyof typeof DartBridgeMigrateErrorCode];

/**
 *  Dart-Bridge Migrate Data structure.
 *
 * @api-version 3
 * @system
 */
export type DartBridgeMigrateDataFile = {
    /**
     * Manifest object.
     *
     * @api-version 3
     * @system
     */
    manifest: Record<string, any>;

    /**
     * Migrate data.
     *
     * @api-version 3
     * @system
     */
    migrateData: Record<string, Buffer>;
}

/**
 * System manager to support Dart-Bridge.
 *
 * @api-version 3
 * @system
 */
export interface IDartBridgeManager extends ISystemManager {
    /**
     * Parse {@link data} to get {@link DartBridgeMigrateDataFile}.
     *
     * @param name Migrate data name.
     * @param data Migrate data to parse.
     * @return Return <Promise> Fulfills with {@link DartBridgeMigrateDataFile} if the request has been operated successfully, otherwise {@link DartBridgeMigrateErrorCode}.
     *
     * @api-version 3
     * @system
     */
    unpackMigrateData(name: string, data: Buffer): Promise<{ data?: DartBridgeMigrateDataFile, errorCode?: DartBridgeMigrateErrorCode }>;

    /**
     * Get running modules and get bounded modules.
     *
     * @param packageNames Target module's package name.
     * @return Return <Promise> Fulfills with {@link packageNamesToStop} and {@link boundModuleNames}.
     *
     * @api-version 3
     * @system
     */
    getRunningModules(packageNames: string[]): Promise<{ packageNamesToStop: string[], boundModuleNames: string[] }>;

    /**
     * Stop modules to migrate data.
     *
     * @param packageNames Target module's package name to stop.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 3
     * @system
     */
    stopModules(packageNames: string[]): Promise<boolean>;
}
// [END] Data Control System API /////////////////////////


// [START] Etc Control System API /////////////////////////
/**
 * System manager for managing configuration of system like as language, measure unit, etc.
 *
 * @api-version 1
 * @user
 */
export interface IConfigurationManager {
    /**
     * {@link Monitorable} language code which has been set currently.
     *
     * @api-version 1
     * @user
     */
    readonly languageCode: Monitorable<string>;

    /**
     * {@link Monitorable} time format which has been set currently.
     *
     * @api-version 2
     * @user
     */
    readonly timeFormat: Monitorable<string>;

    /**
     * Change language.
     *
     * @param languageCode A language code to desired language.
     * @return Return <Promise> Fulfills with true if the language has been changed successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    changeLanguage(languageCode: string): Promise<boolean>;

    /**
     * Change Time Format.
     *
     * @param timeformat Format of the time to Change
     * @return Return <Promise> Fulfills with true if the time format has been changed successfully, otherwise false.
     *
     * @api-version 2
     * @system
     */
    changeTimeFormat(timeformat: string): Promise<boolean>

    /**
     * Get all language codes which are supported from system.
     *
     * @return Return an array of language codes which are supported from system.
     *
     * @api-version 1
     * @user
     */
    getSupportedLanguageCodes(): string[];

    /**
     * Change controller system time
     *
     * @param date data of current date
     * @param time data of current time
     * @return Returns whether the change was successful.
     *
     * @api-version 1
     * @system
     */
    setControllerSystemTime(date: string, time: string): Promise<boolean>;

    /**
     * Get controller system time
     *
     * @return Return <Promise> Fulfills controller system time
     *
     * @api-version 1
     * @system
     */
    getControllerSystemTime(): Promise<{ date: string, time: string }>;

    /**
     * Get EULA Contents
     *
     * @return Return <string> EULA Contents
     *
     * @api-version 1
     * @system
     */
    getEulaContents(): string;

    /**
     * Get EULA Version
     *
     * @return Return <string> EULA Version
     *
     * @api-version 1
     * @system
     */
    getEulaVersion(): string;
}

/**
 * SafetyPasswordManager have options for managing safety password popup.
 *
 * @api-version 3
 * @user
 */
export interface SafetyPasswordPopupOptions {
    customTitle?: string | null,
    customMessage?: string | null,
    emphasizeMessage?: string | null,
    negativeButtonLabel?: string | null,
    positiveButtonLabel?: string | null,
    force?: boolean,
    dialogPanel?: number
}

/**
 * SafetyPasswordManager for managing safety password in the system.
 *
 * @api-version 1
 * @user
 */
export interface ISafetyPasswordManager {
    /**
     * {@link Monitorable} safety password lock state.
     *
     * @api-version 1
     * @user
     */
    readonly safetyPasswordLocked: Monitorable<boolean>;

    /**
     * Confirm Safety password
     *
     * @param context A caller's context
     * @param force If the authentication procedure is required even if the password lock is unlocked, set force to true
     * @return Return password confirmation
     *
     * @api-version 1
     * @user
     */
    safetyPasswordAuthentication(context: Context, force?: boolean):Promise<boolean>;

    /**
     * Confirm Safety password.
     *
     * @param customTitle A custom title. If it is not set, then default title will be displayed.
     * @param customMessage A custom message. If it is not set, then default message will be displayed.
     * @param force If the authentication procedure is required even if the password lock is unlocked, set force to true
     * @return Return <Promise> Fulfills with true if user authenticated safety password successfully, otherwise false.
     *
     * @api-version 1
     * @user
     */
    authenticateSafetyPassword(customTitle: string | null, customMessage: string | null, force?: boolean): Promise<boolean>;

    /**
     * Confirm Safety password.
     *
     * @param options Additional options. {@link SafetyPasswordPopupOptions}
     * @return Return <Promise> Fulfills with true if user authenticated safety password successfully, otherwise false.
     *
     * @api-version 3
     * @user
     */
    authenticateSafetyPassword(options?: SafetyPasswordPopupOptions): Promise<boolean>

    /**
     * Change Safety password
     *
     * @param newPwd A new password
     * @return Return settings table update result
     *
     * @api-version 1
     * @system
     */
    changeSafetyPassword(newPwd:string):Promise<boolean>;

    /**
     * Change Safety password lock state
     *
     * @api-version 1
     * @system
     */
    setSafetyPasswordLock():Promise<void>;

    /**
     * Change Safety password lock state
     *
     * @api-version 3
     * @param locked A lock state
     * @system
     */
    setSafetyPasswordLock(locked: boolean):Promise<void>;

    /**
     * Verify Safety password
     *
     * @param confirmPassword A confirm password
     * @return Return verified or not
     *
     * @api-version 3
     * @system
     */
    verifySafetyPassword(confirmPassword: string):Promise<boolean>;
}

/**
 * This is an enumeration type constant that refers to state of system update and restore, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const UpdateAndRestoreState = {
    /**
     * Idle.
     *
     * @api-version 1
     * @system
     */
    IDLE: 0,
    /**
     * Check precondition to update.
     *
     * @api-version 1
     * @system
     */
    CHECK_UPDATE_PRECONDITION: 0x0001_0001,
    /**
     * Verifying campaign to update.
     *
     * @api-version 1
     * @system
     */
    VERIFYING_UPDATE_CAMPAIGN: 0x0001_0002,
    /**
     * Failed to verify.
     *
     * @api-version 1
     * @system
     */
    FAILED_TO_VERIFY: 0x0001_0003,
    /**
     * Confirm to update.
     *
     * @api-version 1
     * @system
     */
    CONFIRM_TO_UPDATE: 0x0001_0004,
    /**
     * Updating.
     *
     * @api-version 1
     * @system
     */
    UPDATING: 0x0001_0005,
    /**
     * Success to update.
     *
     * @api-version 1
     * @system
     */
    SUCCESS_TO_UPDATE: 0x0001_0006,
    /**
     * Failed to update.
     *
     * @api-version 1
     * @system
     */
    FAILED_TO_UPDATE: 0x0001_0007,
    /**
     * Doing rollback on update.
     *
     * @api-version 1
     * @system
     */
    DOING_ROLLBACK_ON_UPDATE: 0x0001_0008,
    /**
     * Completed to rollback on update.
     *
     * @api-version 1
     * @system
     */
    DONE_ROLLBACK_ON_UPDATE: 0x0001_0009,
    /**
     * Failed to rollback on update.
     *
     * @api-version 2
     * @system
     */
    FAILED_TO_ROLLBACK_ON_UPDATE: 0x0001_0010,
    /**
     * Check precondition to restore.
     *
     * @api-version 1
     * @system
     */
    CHECK_RESTORE_PRECONDITION: 0x0002_0001,
    /**
     * Confirm to restore.
     *
     * @api-version 1
     * @system
     */
    CONFIRM_TO_RESTORE: 0x0002_0002,
    /**
     * Restoring.
     *
     * @api-version 1
     * @system
     */
    RESTORING: 0x0002_0003,
    /**
     * Success to restore.
     *
     * @api-version 1
     * @system
     */
    SUCCESS_TO_RESTORE: 0x0002_0004,
    /**
     * Failed to restore.
     *
     * @api-version 1
     * @system
     */
    FAILED_TO_RESTORE: 0x0002_0005,
    /**
     * Doing rollback on restore.
     *
     * @api-version 1
     * @system
     */
    DOING_ROLLBACK_ON_RESTORE: 0x0002_0006,
    /**
     * Completed to rollback on restore.
     *
     * @api-version 1
     * @system
     */
    DONE_ROLLBACK_ON_RESTORE: 0x0002_0007,
    /**
     * Failed to rollback on restore.
     *
     * @api-version 2
     * @system
     */
    FAILED_TO_ROLLBACK_ON_RESTORE: 0x0002_0008
} as const;
/**
 * @ignore
 */
export type UpdateAndRestoreState = typeof UpdateAndRestoreState[keyof typeof UpdateAndRestoreState];

/**
 * This is an enumeration type constant that refers to types of update package, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const OtaPackageType = {
    /**
     * Application package.
     *
     * @api-version 1
     * @system
     */
    APPLICATION: 0,
    /**
     * System package.
     *
     * @api-version 1
     * @system
     */
    SYSTEM: 1,
    /**
     * OS package.
     *
     * @api-version 1
     * @system
     */
    OS: 2
} as const;
/**
 * @ignore
 */
export type OtaPackageType = typeof OtaPackageType[keyof typeof OtaPackageType];

/**
 * This is an enumeration type constant that refers to types of campaign download, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const CampaignDownloadType = {
    /**
     * Download via TFTP.
     *
     * @api-version 1
     * @system
     */
    TFTP: 0,
    /**
     * Located in controller.
     *
     * @api-version 1
     * @system
     */
    LOCAL: 1,
    /**
     * Located in USB.
     *
     * @api-version 1
     * @system
     */
    USB: 2,
    /**
     * Downloaded from OTA Server.
     *
     * @api-version 1
     * @system
     */
    OTA_SERVER: 3
} as const;
/**
 * @ignore
 */
export type CampaignDownloadType = typeof CampaignDownloadType[keyof typeof CampaignDownloadType];

/**
 * This is an enumeration type constant that refers to state of system update, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const CampaignState = {
    /**
     * No available campaign.
     *
     * @api-version 1
     * @system
     */
    IDLE: 0,
    /**
     * Has a downloadable campaign.
     *
     * @api-version 1
     * @system
     */
    DOWNLOADABLE: 1,
    /**
     * Downloading a campaign.
     *
     * @api-version 1
     * @system
     */
    DOWNLOADING: 2,
    /**
     * Downloaded a campaign.
     *
     * @api-version 1
     * @system
     */
    DOWNLOADED: 3,
    /**
     * Verifying a campaign.
     *
     * @api-version 2
     * @system
     */
    VERIFYING: 4,
    /**
     * Has an updatable campaign.
     *
     * @api-version 2
     * @system
     */
    UPDATABLE: 5,
    /**
     * Updating a campaign.
     *
     * @api-version 2
     * @system
     */
    UPDATING: 6,
    /**
     * Updated a campaign successfully.
     *
     * @api-version 1
     * @system
     */
    UPDATE_SUCCESS: 7,
    /**
     * Failed to update a campaign.
     *
     * @api-version 1
     * @system
     */
    UPDATE_FAILED: 8
} as const;
/**
 * @ignore
 */
export type CampaignState = typeof CampaignState[keyof typeof CampaignState];

/**
 * This is an enumeration type constant that refers to network state, and is defined as follows.
 *
 * @enum
 * @api-version 2
 * @system
 */
export const OtaNetworkState = {
    /**
     * Offline.
     *
     * @api-version 2
     * @system
     */
    OFFLINE: 0,
    /**
     * Online.
     *
     * @api-version 2
     * @system
     */
    ONLINE: 1
} as const;
/**
 * @ignore
 */
export type OtaNetworkState = typeof OtaNetworkState[keyof typeof OtaNetworkState];

/**
 * OTA Campaign Information (packet = 283, 348)
 *
 * @api-version 1
 * @system
 */
export type CampaignInfo = {
    /**
     * Campaign state.
     *
     * @api-version 1
     * @system
     */
    state: CampaignState,
    /**
     * Campaign name.
     *
     * @api-version 1
     * @system
     */
    campaignName: string,
    /**
     * Type of target package of the campaign.
     *
     * @api-version 1
     * @system
     */
    targetPackages: OtaPackageType[],
    /**
     * Start Time. (ex. YYYY-MM-DD_hh:mm)
     *
     * @api-version 1
     * @system
     */
    startTime: string,
    /**
     * End Time. (ex. YYYY-MM-DD_hh:mm)
     *
     * @api-version 1
     * @system
     */
    endTime: string,
    /**
     * Application package version.
     *
     * @api-version 1
     * @system
     */
    applicationPackageVersion: string,
    /**
     * System package version.
     *
     * @api-version 1
     * @system
     */
    systemPackageVersion: string,
    /**
     * OS package version.
     *
     * @api-version 1
     * @system
     */
    osPackageVersion: string,
    /**
     * Network state for communication with OTA server.
     *
     * @api-version 1
     * @system
     */
    otaServerState: OtaNetworkState,
}

/**
 * Campaign change note.
 *
 * @api-version 1
 * @system
 */
export type CampaignChangeNote = {
    /**
     * SDK version of new Dart-Platform.
     *
     * @api-version 1
     * @system
     */
    dpSdkVersion?: string[],
    /**
     * List of compatible SDK version on new Dart-Platform.
     *
     * @api-version 1
     * @system
     */
    dpCompatibleSdks?: string[],
    /**
     * List of compatible SDK version on new DRAS.
     *
     * @api-version 1
     * @system
     */
    drasCompatibleSdks?: string[],
    /**
     * Changes of the package.
     *
     * @api-version 1
     * @system
     */
    note: string[]
}

/**
 * Local Campaign (System package) Information
 *
 * @api-version 1
 * @system
 */
export const LocalCampaignState = {
    /**
     * No available a local campaign file.
     *
     * @api-version 1
     * @system
     */
    IDLE: 0,
    /**
     * Uploading a local campaign file.
     *
     * @api-version 1
     * @system
     */
    UPLOADING: 1,
    /**
     * Uploaded a local campaign file.
     *
     * @api-version 1
     * @system
     */
    UPLOADED: 2,
    /**
     * Updating a local campaign file.
     *
     * @api-version 1
     * @system
     */
    UPDATING: 3
} as const;
/**
 * @ignore
 */
export type LocalCampaignState = typeof LocalCampaignState[keyof typeof LocalCampaignState];

/**
 * Local Campaign Information
 *
 * @api-version 1
 * @system
 */
export type LocalCampaignInfo = {
    /**
     * Campaign state.
     *
     * @api-version 1
     * @system
     */
    state: LocalCampaignState,
    /**
     * Campaign file name.
     *
     * @api-version 1
     * @system
     */
    fileName: string,
    /**
     * Campaign file path.
     *
     * @api-version 1
     * @system
     */
    filePath: string,
    /**
     * Change note.
     *
     * @api-version 1
     * @system
     */
    changeNote: null | CampaignChangeNote;
    /**
     * Progress of uploading a local campaign.
     *
     * @api-version 1
     * @system
     */
    progress: number;
}

/**
 * Robot software version information.
 *
 * @api-version 3
 * @system
 */
export type RobotSwVersion = {
    /**
     * Version of Application package. (e.g. GV03030000)
     *
     * @api-version 3
     * @system
     */
    application: string,
    /**
     * Version of DRCF. (e.g. GF03030000)
     *
     * @api-version 3
     * @system
     */
    drcf: string,
    /**
     * Version of Safety board. (e.g. GD33030000)
     *
     * @api-version 3
     * @system
     */
    safety: string,
    /**
     * Version of Inverter. (e.g. GA33020000)
     *
     * @api-version 3
     * @system
     */
    inverter: string;
}

/**
 * System manager to provide APIs for managing software.
 *
 * @api-version 1
 * @system
 */
export interface IUpdateAndRestoreManager extends ISystemManager {
    /**
     * {@link Monitorable} update and restore state.
     *
     * @api-version 1
     * @system
     */
    readonly updateAndRestoreState: Monitorable<UpdateAndRestoreState>;

    /**
     * {@link Monitorable} OTA campaign information.
     *
     * @api-version 1
     * @system
     */
    readonly campaignInfo: Monitorable<CampaignInfo>;

    /**
     * {@link Monitorable} Local campaign information.
     *
     * @api-version 1
     * @system
     */
    readonly localCampaignInfo: Monitorable<LocalCampaignInfo>;

    /**
     * {@link Monitorable} Whether to automatically download campaigns.
     *
     * @api-version 1
     * @system
     */
    readonly autoDownloadCampaign: Monitorable<boolean>;

    /**
     * Set whether to automatically download campaigns.
     *
     * @param enabled True to auto-download campaigns.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    setAutoDownloadCampaignEnabled(enabled: boolean): Promise<boolean>;

    /**
     * Get change note of the desired package type on current version.
     * The data is formatted as below:
     * - application: { dpSdkVersion: string, dpCompatibleSdks: string[], drasCompatibleSdks: string[], note: string[] }
     * - system: { note: string[] }
     * - os: { note: string[] }
     *
     * @param type A desired type to retrieve a change note.
     * @return Return <Promise> Fulfills with change note if the request has been operated successfully, otherwise empty string.
     *
     * @api-version 1
     * @system
     */
    getChangeNote(type: OtaPackageType): Promise<null | CampaignChangeNote>;

    /**
     * Update OTA campaign information {@link CampaignInfo}.
     *
     * @return Return OTA Campaign Information
     *
     * @api-version 1
     * @system
     */
    updateCampaignInformation(): Promise<boolean>;

    /**
     * Get a change note of the desired OTA package from a campaign.
     * The data is formatted as below:
     * - application: { dpSdkVersion: string, dpCompatibleSdks: string[], drasCompatibleSdks: string[], note: string[] }
     * - system: { note: string[] }
     * - os: { note: string[] }
     *
     * @param type A desired type to retrieve a change note.
     * @return Return OTA Campaign Information
     *
     * @api-version 1
     * @system
     */
    getCampaignChangeNote(type: OtaPackageType): Promise<null | CampaignChangeNote>;

    /**
     * Download a campaign.
     *
     * @param requestedFromSetting Whether it is requested from the Settings module.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    downloadCampaign(requestedFromSetting: boolean): Promise<boolean>;

    /**
     * Start an update process.
     *
     * @param campaignDownloadType A download type of the target campaign.
     * @param requestedFromSetting Whether it is requested from the Settings module.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    startUpdateCampaign(campaignDownloadType: CampaignDownloadType, requestedFromSetting: boolean): Promise<boolean>;

    /**
     * Upload a local campaign file to controller.
     *
     * @param fileHandler {@link fileHandler} to handle local campaign file.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @system
     */
    uploadLocalCampaignFile(fileHandler: FileHandler): Promise<boolean>;

    /**
     * Cancel the local campaign file upload operation.
     *
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    cancelUploadLocalCampaignFile(): Promise<void>;

    /**
     * Delete the local campaign file from controller.
     *
     * @param fileName The file name to delete.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    deleteLocalCampaignFile(fileName: string): Promise<boolean>;

    /**
     * Get list of versions which can be restore.
     *
     * @return Return <Promise> Fulfills with RestoreList if the request has been operated successfully, otherwise null.
     *
     * @api-version 2
     * @system
     */
    getRestoreVersions(): Promise<RestoreVersion[] | null>;

    /**
     * Start restore confirmation.
     *
     * @param restoringVersion version that you choose to restore.
     * @param restoringVersionDate saved date that you choose to restore.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @system
     */
    startRestoreConfirmation(restoringVersionName: string, restoringVersionDate: string): Promise<boolean>;

    /**
     * Get released robot software versions.
     *
     * @return Return an array of {@link RobotSwVersion}
     *
     * @api-version 3
     * @system
     */
    getReleasedRobotSoftwareVersions(): RobotSwVersion[];
}

/**
 * Restore Version Data (packet = 267)
 *
 * @api-version 2
 * @system
 */
export type RestoreVersion = {
    /**
     * Saved date
     *
     * @api-version 2
     * @system
     */
    date: string,
    /**
     * Saved name
     *
     * @api-version 2
     * @system
     */
    name: string,
    /**
     * Availability of data
     *
     * @api-version 2
     * @system
     */
    isAvailable: boolean,
}

/**
 * System log type
 *
 * @enum
 * @api-version 2
 * @system
 */
export const LogType = {
    /**
     * Contain messages of the Dr.Dart-Platform.
     *
     * @api-version 2
     * @system
     */
    DART_PLATFORM: 0b0000_0001,
    /**
     * Contain messages of the Controller board.
     *
     * @api-version 2
     * @system
     */
    CONTROLLER: 0b0000_0010,
    /**
     * Contain messages of the OTA agent.
     *
     * @api-version 2
     * @system
     */
    OTA: 0b0000_0100,
    /**
     * Contain messages of the operating system.
     *
     * @api-version 2
     * @system
     */
    OS: 0b0000_1000
} as const;
/**
 * @ignore
 */
export type LogType = typeof LogType[keyof typeof LogType];

/**
 * ResetAndRestoreManager for backup&restore data on the system and provides factory reset and log reset.
 *
 * @api-version 1
 * @system
 */
export interface IResetAndRestoreManager {
    /**
     * Performing a Factory Reset
     *
     * @return Return <boolean> Return factory reset success or failure.
     *
     * @api-version 1
     * @system
     */
    resetAll(): Promise<boolean>;

    /**
     * Performing a log reset
     *
     * @return Return <boolean> Return log reset success or failure.
     *
     * @api-version 1
     * @system
     */
    resetLog(): Promise<boolean>;

    /**
     * Request to export the {@link targets}.
     *
     * @param targets Targets to export.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @system
     */
    exportData(targets: { system: boolean, modules: string[] }): Promise<boolean>;

    /**
     * Request to import data.
     *
     * @param retry Whether to retry importing data
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @system
     */
    importData(retry?: boolean): Promise<boolean>;

    /**
     * Request to export the {@link targets}.
     *
     * @param targets Targets to export.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @system
     */
    exportLog(targets: { logFlags: number, startDate?: number, endDate?: number }): Promise<boolean>;
}

/**
 * Types of user.
 *
 * @enum
 * @api-version 1
 * @user
 */
export const User = {
    /**
     * 'supervisor' user.
     *
     * @api-version 1
     * @user
     */
    SUPERVISOR: "supervisor",

    /**
     * 'operator' user.
     *
     * @api-version 1
     * @user
     */
    OPERATOR: "operator",
} as const;
/**
 * @ignore
 */
export type User = typeof User[keyof typeof User];

export interface UserPasswordPopupOptions {
    customTitle?: string | null,
    customMessage?: string | null,
    emphasizeMessage?: string | null,
    negativeButtonLabel?: string | null,
    positiveButtonLabel?: string | null,
    options? : { dialogPanel?: number }
}

/**
 * IUserManager have APIs for managing users.
 *
 * @api-version 1
 * @user
 */
export interface IUserManager extends ISystemManager {
    /**
     * {@link Monitorable} {@link User}.
     *
     * @api-version 1
     * @user
     */
    readonly user: Monitorable<User>;

    /**
     * Change user {@link User}.
     *
     * @param user An user to change.
     * @param customTitle A custom title. If it is not set, then default title will be displayed.
     * @param customMessage A custom message. If it is not set, then default message will be displayed.
     * @return Return <Promise> Fulfills with true if the user has been changed successfully, otherwise false.
     *
     * @api-version 1
     * @system
     */
    changeUser(user: User, customTitle?: string, customMessage?: string): Promise<boolean>;

    /**
     * Change user {@link User}. Request user password.
     *
     * @param user An user to change.
     * @param options Additional options. {@link UserPasswordPopupOptions}
     * @return Return <Promise> Fulfills with true if the user has been changed successfully, otherwise false.
     *
     * @api-version 3
     * @system
     */
    changeUser(user: User, options?: UserPasswordPopupOptions): Promise<boolean>;

    /**
     * Change User password
     *
     * @param user An user to change password.
     * @param newPwd A new password
     * @return Return settings table update result
     *
     * @api-version 3
     * @system
     */
    changeUserPassword(user: User, newPwd:string):Promise<boolean>;

    /**
     * Show confirm dialog for user password
     *
     * @param user An user to authenticate.
     * @param options Additional options. {@link UserPasswordPopupOptions}
     * @return Return <Promise> Fulfills with true if user authenticated user password successfully, otherwise false.
     *
     * @api-version 3
     * @user
     */
    authenticateUserPassword(user: User, options?: UserPasswordPopupOptions): Promise<boolean>

    /**
     * Verify User password
     *
     * @param user A user
     * @param confirmPassword A confirm password
     * @return Return <Promise> Fulfills with true if the confirmPassword is correct, otherwise false.
     *
     * @api-version 3
     * @system
     */
    verifyUserPassword(user: User, confirmPassword: string):Promise<boolean>;
}

/**
 * System manager for the clipboard
 *
 * @api-version 2
 * @user
 */
export interface IClipboardManager extends ISystemManager {

    /**
     * Copy to clipboard
     *
     * @param text String to be saved to clipboard
     *
     * @api-version 2
     * @user
     */
    write(text:string): void;
    /**
     * Paste from clipboard
     *
     * @return Return <string> Return String from clipboard
     *
     * @api-version 2
     * @user
     */
    read(): Promise<string>;
}

/**
 * This is an enumeration type constant that refers to the reason of disconnection, and is defined as follows.
 *
 * @enum
 * @api-version 2
 * @user
 */
export const AiProcessMessengerError = {
    /**
     * Unknown Error.
     *
     * @api-version 2
     * @user
     */
    UNKNOWN: 0x0000_0000,

    /**
     * The messenger has been destroyed.
     *
     * @api-version 2
     * @user
     */
    DESTROYED: 0x0001_0000,
    /**
     * Failed to bind with API lib.
     *
     * @api-version 2
     * @user
     */
    FAILED_TO_BIND_WITH_SERVER_API_LIB: 0x0001_0001,
    /**
     * Error on server API.
     *
     * @api-version 2
     * @user
     */
    SERVER_API_ERROR: 0x0001_0002,

    /**
     * Network error.
     *
     * @api-version 2
     * @user
     */
    NETWORK_ERROR: 0x0002_0000,
    /**
     * The messenger is not connected with the AI process server.
     *
     * @api-version 2
     * @user
     */
    NOT_CONNECTED: 0x0002_0001,
    /**
     * The messenger has been already connected with the AI process server.
     *
     * @api-version 2
     * @user
     */
    ALREADY_CONNECTED: 0x0002_0002,

    /**
     * The messenger is not logged in to the AI process server.
     *
     * @api-version 2
     * @user
     */
    NOT_LOGGED_IN: 0x0003_0000,
    /**
     * The messenger has been already logged in to the AI process server.
     *
     * @api-version 2
     * @user
     */
    ALREADY_LOGGED_IN: 0x0003_0001,
    /**
     * Invalid account.
     *
     * @api-version 2
     * @user
     */
    INVALID_ACCOUNT: 0x0003_0002,
    /**
     * Invalid password.
     *
     * @api-version 2
     * @user
     */
    INVALID_PASSWORD: 0x0003_0003,
    /**
     * Failed to get time token.
     *
     * @api-version 2
     * @user
     */
    FAILED_TO_GET_TIME_TOKEN: 0x0003_0004,
    /**
     * The messenger did not log in or expired the token.
     *
     * @api-version 2
     * @user
     */
    INVALID_AI_TOKEN: 0x0003_0005,

    /**
     * The requested model's id is not valid.
     *
     * @api-version 2
     * @user
     */
    INVALID_MODEL_ID: 0x0004_0000,
    /**
     * The requested model has already been installed.
     *
     * @api-version 2
     * @user
     */
    ALREADY_INSTALLED: 0x0004_0001
} as const
/**
 * @ignore
 */
export type AiProcessMessengerError = typeof AiProcessMessengerError[keyof typeof AiProcessMessengerError];

/**
 * Interface to send callbacks to the module when model state has been changed.
 *
 * @api-version 2
 * @user
 */
export interface AiProcessListener {
    /**
     * Invoked when login with {@link token}.
     *
     * @param token A token about logged in account.
     *
     * @api-version 2
     * @user
     */
    onLoggedIn(token: string): void;

    /**
     * Invoked when logged out with {@link token}.
     *
     * @param token A token about logged out account.
     *
     * @api-version 2
     * @user
     */
    onLoggedOut(token: string): void;

    /**
     * Invoked when the model has been downloaded to AI process.
     *
     * @param model Download target model.
     *
     * @api-version 2
     * @user
     */
    onTrainedModelInstalled(model: AiProcessModelInfo): void;

    /**
     * Invoked when the model has been deleted from AI process.
     *
     * @param model Delete target model.
     *
     * @api-version 2
     * @user
     */
    onTrainedModelDeleted(model: AiProcessModelInfo): void;

    /**
     * Invoked when the model has been loaded.
     *
     * @param model Target model.
     *
     * @api-version 2
     * @user
     */
    onTrainedModelLoaded(model: AiProcessModelInfo): void;

    /**
     * Invoked when the model has been unloaded.
     *
     * @param model Target model.
     *
     * @api-version 2
     * @user
     */
    onTrainedModelUnloaded(model: AiProcessModelInfo): void;

    /**
     * Invoked when new data for training is collected in external AI engine software.
     *
     * @param id An id of the collected data.
     *
     * @api-version 2
     * @user
     */
    onNewDataForTrainingCollected(id: string): void;
}

/**
 * Overall information about the external AI process.
 * This corresponds to all the information collected through {@link IAiExternalProcessMessenger.search}.
 *
 * @api-version 2
 * @user
 */
export type ExternalAiProcessInfo = {
    /**
     * The name of AI process.
     *
     * @api-version 2
     * @user
     */
    name: string;
    /**
     * The version of the AI process.
     *
     * @api-version 2
     * @user
     */
    version: string;
    /**
     * The IP address of AI process's Websocket server.
     *
     * @api-version 2
     * @user
     */
    ipAddress: FourNumArray;
    /**
     * The port number of AI process's Websocket server.
     *
     * @api-version 2
     * @user
     */
    port: number;
}

/**
 * Interface to send callbacks to the module when connection state has been changed.
 *
 * @api-version 2
 * @user
 */
export interface AiProcessConnectionListener {
    /**
     * Invoked upon a successful connection.
     *
     * @api-version 2
     * @user
     */
    onConnected(): void

    /**
     * Invoked upon a connection error.
     *
     * @param error An error occurred during connection.
     *
     * @api-version 2
     * @user
     */
    onConnectionError(error: Error): void

    /**
     * Invoked upon a successful disconnection.
     *
     * @param reason A reason of disconnection.
     *
     * @api-version 2
     * @user
     */
    onDisconnected(reason: AiProcessDisconnectionReason): void

    /**
     * Invoked upon an attempt to reconnect.
     *
     * @param attempt A reason of disconnection.
     *
     * @api-version 2
     * @user
     */
    onReconnectAttempt(attempt: number): void

    /**
     * Invoked upon a successful reconnection
     *
     * @api-version 2
     * @user
     */
    onReconnected(): void

    /**
     * Invoked upon a reconnection attempt error.
     *
     * @param error An error occurred during reconnection.
     *
     * @api-version 2
     * @user
     */
    onReconnectError(error: Error): void

    /**
     * Invoked when couldn't reconnect within {@link AiProcessConnectionOptions.reconnectionAttempts}.
     *
     * @api-version 2
     * @user
     */
    onReconnectFailed(): void
}

/**
 * Structure for options to use when connecting.
 *
 * @api-version 2
 * @user
 */
export type AiProcessConnectionOptions = {
    /**
     * Whether reconnection is enabled or not.
     * Default value: true
     *
     * @api-version 2
     * @user
     */
    reconnection: boolean;
    /**
     * The number of reconnection attempts before giving up.
     * Default value: Infinity
     *
     * @api-version 2
     * @user
     */
    reconnectionAttempts: number;
    /**
     * The maximum delay between two reconnection attempts.
     * Default value: 1000
     *
     * @api-version 2
     * @user
     */
    reconnectionDelay: number;
    /**
     * The timeout in milliseconds for each connection attempt.
     * Default value: 20000
     *
     * @api-version 2
     * @user
     */
    timeout: number;
}

/**
 * This is an enumeration type constant that refers to the reason of disconnection, and is defined as follows.
 *
 * @enum
 * @api-version 2
 * @user
 */
export const AiProcessDisconnectionReason = {
    /**
     * Unknown.
     *
     * @api-version 2
     * @user
     */
    UNKNOWN: 0,
    /**
     * The server has forcefully disconnected.
     *
     * @api-version 2
     * @user
     */
    SERVER_DISCONNECT: 1,
    /**
     * The client was manually disconnected by {@link IAiManager.disconnect}.
     *
     * @api-version 2
     * @user
     */
    CLIENT_DISCONNECT: 2,
    /**
     * The server did not send a PING.
     *
     * @api-version 2
     * @user
     */
    PING_TIMEOUT: 3,
    /**
     * The connection was closed.
     *
     * @api-version 2
     * @user
     */
    TRANSPORT_CLOSE: 4,
    /**
     * The connection has encountered an error
     *
     * @api-version 2
     * @user
     */
    INSTALLED_IN_INFERENCE_ENGINE: 5
} as const;
/**
 * @ignore
 */
export type AiProcessDisconnectionReason = typeof AiProcessDisconnectionReason[keyof typeof AiProcessDisconnectionReason];

/**
 * Structure for account token which is created through {@link IAiProcessMessenger.login}.
 *
 * @api-version 2
 * @user
 */
export type AiProcessAccountToken = {
    /**
     * Token to identify the log in.
     *
     * @api-version 2
     * @user
     */
    token: string;
    /**
     * The account information which is logged in.
     *
     * @api-version 2
     * @user
     */
    account: string
}

/**
 * Overall information about the AI model.
 * This corresponds to all the information collected through {@link IAiProcessMessenger.getProjects}.
 *
 * @api-version 2
 * @user
 */
export type AiProcessModelProjectInfo = {
    /**
     * Model id.
     *
     * @api-version 2
     * @user
     */
    id: string;
    /**
     * Model name.
     *
     * @api-version 2
     * @user
     */
    name: string;
}

/**
 * Overall information about the AI model.
 * This corresponds to all the information collected through {@link IAiProcessMessenger.getTrainedModelsFromServer}.
 *
 * @api-version 2
 * @user
 */
export type AiProcessModelInfo = {
    /**
     * Model id.
     *
     * @api-version 2
     * @user
     */
    id: string;
    /**
     * Project id.
     *
     * @api-version 2
     * @user
     */
    projectId: string;
    /**
     * Model name.
     *
     * @api-version 2
     * @user
     */
    name: string;
    /**
     * The model's owner account.
     *
     * @api-version 2
     * @user
     */
    account: string;
    /**
     * Status of model.
     *
     * @api-version 2
     * @user
     */
    status: AiProcessModelStatus;
    /**
     * Metadata for the trained model.
     *
     * @api-version 2
     * @user
     */
    metadata: AiProcessModelMetadata;
    /**
     * Optional data.
     *
     * @api-version 2
     * @user
     */
    options: Record<string, string | number | boolean>;
}

/**
 * Structure for metadata for a trained model.
 *
 * @api-version 2
 * @user
 */
export type AiProcessModelMetadata = {
    /**
     * List of items that can be inferred from a trained model.
     *
     * @api-version 2
     * @user
     */
    items: {
        /**
         * An item name that can be inferred.
         *
         * @api-version 2
         * @user
         */
        name: string,
        /**
         * A result value returned if the item was inferred.
         *
         * @api-version 2
         * @user
         */
        inferenceResult: any
    }[],
    /**
     * Additional information for a trained model (e.g. gripper pos, gripper force and so on).
     *
     * @api-version 2
     * @user
     */
    options: Record<string, any>
}

/**
 * This is an enumeration type constant that refers to the status of AI Process Model, and is defined as follows.
 *
 * @enum
 * @api-version 2
 * @user
 */
export const AiProcessModelStatus = {
    /**
     * The model is training on the server now.
     *
     * @api-version 2
     * @user
     */
    TRAINING: 0x0000_0000,
    /**
     * The model has completed training.
     *
     * @api-version 2
     * @user
     */
    AVAILABLE: 0x0000_0001,
    /**
     * The model training failed.
     *
     * @api-version 2
     * @user
     */
    FAILED_TO_TRAINING: 0x0000_0002,
    /**
     * The model training cancelled.
     *
     * @api-version 2
     * @user
     */
    CANCELED_TO_TRAINING: 0x0000_0003,
    /**
     * The model has been installed in inference engine.
     *
     * @api-version 2
     * @user
     */
    INSTALLED_IN_INFERENCE_ENGINE: 0x0001_0000,
    /**
     * The model has been loaded in inference engine. It can be used to inference.
     *
     * @api-version 2
     * @user
     */
    LOADED_IN_INFERENCE_ENGINE: 0x0001_0001
} as const;
/**
 * @ignore
 */
export type AiProcessModelStatus = typeof AiProcessModelStatus[keyof typeof AiProcessModelStatus];

/**
 * Interface to send callbacks to the module when the model download and install started.
 *
 * @api-version 2
 * @user
 */
export interface AiProcessModelInstallListener {
    /**
     * Invoked when the model download started.
     *
     * @param modelId Target model id.
     *
     * @api-version 2
     * @user
     */
    onStarted(modelId: string): void;

    /**
     * Invoked when the model download progress has been changed.
     *
     * @param modelId Target model id.
     * @param progress Download progress (0 ~ 100).
     *
     * @api-version 2
     * @user
     */
    onProgress(modelId: string, progress: number): void;

    /**
     * Invoked when the model download completed successfully.
     *
     * @param modelId Target model id.
     *
     * @api-version 2
     * @user
     */
    onSuccess(modelId: string): void;

    /**
     * Invoked upon a download error.
     *
     * @param modelId Target model id.
     * @param error An error occurred during connection.
     *
     * @api-version 2
     * @user
     */
    onError(modelId: string, error: AiProcessMessengerError): void;
}

/**
 * A listener to send callbacks to the module when new event has been arrived from AI process.
 *
 * @param args Arguments consists of key value pair for the event.
 *
 * @api-version 2
 * @user
 */
export type AiProcessEventListener = (args: Record<string, string | number | boolean>) => void;

/**
 * Overall information about file transmitted through the AI process.
 * This corresponds to all the information collected through {@link AiProcessFileTransferListener.onFileTransferred}.
 *
 * @api-version 2
 * @user
 */
export type AiProcessFileInfo = {
    /**
     * Name of the file.
     *
     * @api-version 2
     * @user
     */
    name: string;
    /**
     * MIME type of the file data.
     *
     * @api-version 2
     * @user
     */
    mimeType: string;
}

/**
 * Interface to send callbacks to the module when a file has been transferred from AI process.
 *
 * @api-version 2
 * @user
 */
export interface AiProcessFileTransferListener {
    /**
     * Invoked when a file has been transferred from AI process.
     *
     * @param fileInfo A file info.
     * @param file A file.
     *
     * @api-version 2
     * @user
     */
    onFileTransferred(fileInfo: AiProcessFileInfo, file: Blob): void;
}

/**
 * System manager to manage {@link IAiInternalProcessMessenger} and {@link IAiExternalProcessMessenger}.
 *
 * @api-version 2
 * @user
 */
export interface IAiManager extends ISystemManager {
    /**
     * Create a messenger to communicate with AI backend server and AI internal inference engine (module).
     *
     * @param inferenceEngineModulePackageName A package name of inference engine (framework) module
     * @param aiServerApiPackageName A package name of the API delivery module for communicating with the AI server.
     * @return Return {@link IAiInternalProcessMessenger} if the request has been operated successfully, otherwise null.
     *
     * @api-version 2
     * @user
     */
    createAiInternalProcessMessenger(inferenceEngineModulePackageName: string, aiServerApiPackageName: string): IAiInternalProcessMessenger | null;

    /**
     * Create a messenger to communicate with AI external inference engine (software).
     *
     * @return Return {@link IAiExternalProcessMessenger} if the request has been operated successfully, otherwise null.
     *
     * @api-version 2
     * @user
     */
    createAiExternalProcessMessenger(): IAiExternalProcessMessenger | null;
}

/**
 * A common interface for {@link IAiInternalProcessMessenger} and {@link IAiExternalProcessMessenger}.
 *
 * @api-version 2
 * @user
 */
export interface IAiProcessMessenger {
    /**
     * {@link Monitorable} A list of trained models which are registered in AI server.
     * If the login is successful, it will be initialized to the data accessible to the logged-in account.
     *
     * @api-version 2
     * @user
     */
    readonly trainedModelsRegisteredInServer: Monitorable<AiProcessModelInfo[]>;

    /**
     * Destroy and release the AI process handler.
     * You cannot reuse it after destroying it.
     *
     * @return Return <Promise> Fulfills with void if the request has been done.
     *
     * @api-version 2
     * @user
     */
    destroy(): Promise<void>;

    /**
     * Register a listener to receive callback when Ai process's state has been changed.
     *
     * @param listener A listener to be registered.
     *
     * @api-version 2
     * @user
     */
    registerAiProcessListener(listener: Partial<AiProcessListener>): void;

    /**
     * Unregister a listener or all listeners which are registered by {@link IAiProcessMessenger.registerAiProcessListener}.
     *
     * @param listener A listener to be unregistered. If it is not set, all listeners will be unregistered.
     *
     * @api-version 2
     * @user
     */
    unregisterAiProcessListener(listener?: Partial<AiProcessListener>): void;

    /**
     * Request to log in to AI process with a Dart-Store account.
     *
     * @param account An account to use when logging in.
     * @param password An password to use when logging in.
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    login(account: string, password: string, options?: Record<string, string | number | boolean>): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Request to log out.
     *
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    logout(options?: Record<string, string | number | boolean>): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Whether the handler has been logged in as {@link account} or not.
     *
     * @param account An account to check.
     * @return Return <Promise> Fulfills with true if the handler has been log in, otherwise false.
     *
     * @api-version 2
     * @user
     */
    isLoggedInAs(account: string): Promise<{ result: boolean; error?: AiProcessMessengerError }>;

    /**
     * Request a list of projects created on the logged in account to AI server.
     *
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with list of {@link AiProcessModelProjectInfo} if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    getProjects(options?: Record<string, string | number | boolean>): Promise<{ result: AiProcessModelProjectInfo[], error?: AiProcessMessengerError }>;

    /**
     * Request AI Server to create a new project.
     *
     * @param projectName A name of the project to create.
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with {@link AiProcessModelProjectInfo} if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    createNewProject(projectName: string, options?: Record<string, string | number | boolean>): Promise<{ result: AiProcessModelProjectInfo | null, error?: AiProcessMessengerError }>;

    /**
     * Request a list of model data that exists in the project to AI server.
     *
     * @param projectId A target project id.
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with list of {@link AiProcessModelInfo} if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    getTrainedModelsFromServer(projectId: string, options?: Record<string, string | number | boolean>): Promise<{ result: AiProcessModelInfo[], error?: AiProcessMessengerError }>;

    /**
     * Gets the list of all installed models for the logged in account from internal AI inference module.
     *
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with list of {@link AiProcessModelInfo} if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    getInstalledTrainedModels(options?: Record<string, string | number | boolean>): Promise<{ result: AiProcessModelInfo[], error?: AiProcessMessengerError }>;

    /**
     * Request to download and update training model to AI inference module.
     *
     * @param modelId Target model id.
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    deleteTrainedModel(modelId: string, options?: Record<string, string | number | boolean>): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Request to load a model to AI inference module.
     *
     * @param modelId Target model id.
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    loadTrainedModel(modelId: string, options?: Record<string, string | number | boolean>): Promise<{ result: boolean, error?: AiProcessMessengerError }>;
}

/**
 * A messenger to provide APIs to communicate with AI backend server and internal AI inference engine (module).
 *
 * @api-version 2
 * @user
 */
export interface IAiInternalProcessMessenger extends IAiProcessMessenger {
    /**
     * Request to upload collection data for model training to AI server.
     *
     * @param projectId An id of the project where you want to upload the collection data.
     * @param collectedData A collection data required for model training.
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    uploadCollectionData(projectId: string, collectedData: string, options?: Record<string, string | number | boolean>): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Request to download and install training model to AI inference module.
     *
     * @param modelId Target model id.
     * @param metadata A metadata for the trained model which is generated through {@link IAiProcessMessenger.getTrainedModelsFromServer}.
     * @param listener A listener to be registered.
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    installTrainedModel(modelId: string, metadata: AiProcessModelMetadata, listener: AiProcessModelInstallListener, options?: Record<string, string | number | boolean>): Promise<{ result: boolean, error?: AiProcessMessengerError }>;
}

/**
 * A messenger to provide APIs to communicate with external AI inference engine (software).
 *
 * @api-version 2
 * @user
 */
export interface IAiExternalProcessMessenger extends IAiProcessMessenger {
    /**
     * Search AI processes which are possible communicated with AI user module.
     * The processes are collected through UDP protocol.
     *
     * @param aiProcessUdpPort UDP port of AI process to search.
     * @return Return <Promise> Fulfills with {@link ExternalAiProcessInfo} which are collected through UDP protocol.
     *
     * @api-version 2
     * @user
     */
    search(aiProcessUdpPort: number): Promise<{ result: ExternalAiProcessInfo[]; error?: AiProcessMessengerError }>;

    /**
     * Manually connect with server of AI processes.
     *
     * @param ip An IP of server to connect.
     * @param port A port of server to connect.
     * @param listener A listener to receive states of the connection.
     * @param options (Optional)
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    connect(ip: FourNumArray, port: number, listener: Partial<AiProcessConnectionListener>, options?: Partial<AiProcessConnectionOptions>): Promise<{ result: boolean; error?: AiProcessMessengerError }>;

    /**
     * Manually disconnect the connection. In that case, it will not try to reconnect.
     *
     * @return Return <Promise> Fulfills with true if the handler has been disconnected successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    disconnect(): Promise<{ result: boolean; error?: AiProcessMessengerError }>;

    /**
     * Whether the handler has been connected or not.
     *
     * @return Return <Promise> Fulfills with true if the handler has been connected, otherwise false.
     *
     * @api-version 2
     * @user
     */
    isConnected(): Promise<{ result: boolean; error?: AiProcessMessengerError }>;

    /**
     * Request to upload collection data for model training to AI server.
     *
     * @param projectId An id of the project where you want to upload the collection data.
     * @param collectedDataId An id of collected data to upload.
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    uploadCollectionData(projectId: string, collectedDataId: string, options?: Record<string, string | number | boolean>): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Request to download and install training model to AI inference module.
     *
     * @param modelId Target model id.
     * @param listener A listener to be registered.
     * @param options Additional options. It will be passed to API lib module or external AI inference engine.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    installTrainedModel(modelId: string, listener: AiProcessModelInstallListener, options?: Record<string, string | number | boolean>): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Register a listener to transfer file.
     *
     * @param listener A listener to receive callbacks when an event has been sent from AI process.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    addFileTransferListener(listener: AiProcessFileTransferListener): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Unregister a listener or all listeners which are registered by {@link IAiExternalProcessMessenger.addFileTransferListener}.
     *
     * @param listener A listener to be unregistered. If it is not set, all listeners will be unregistered.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    removeFileTransferListener(listener?: AiProcessFileTransferListener): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Send an event to the connected AI process.
     *
     * @param eventName Event name.
     * @param args Arguments consists of key value pair for the event.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    sendEvent(eventName: string, args: Record<string, string | number | boolean>): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Register an event listener for the {@link eventName}.
     *
     * @param eventName Event name.
     * @param listener A listener to receive callbacks when an event has been sent from AI process.
     * @param once If you set true, then the listener will be removed after receive an event. Default is false.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    addEventListener(eventName: string, listener: AiProcessEventListener, once?: boolean): Promise<{ result: boolean, error?: AiProcessMessengerError }>;

    /**
     * Unregister a listener or all listeners which are registered by {@link IAiExternalProcessMessenger.addEventListener}.
     *
     * @param eventName Event name.
     * @param listener A listener to be unregistered. If it is not set, all listeners will be unregistered.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false with {@link AiProcessMessengerError}.
     *
     * @api-version 2
     * @user
     */
    removeListener(eventName: string, listener?: AiProcessEventListener): Promise<{ result: boolean, error?: AiProcessMessengerError }>;
}
// [END] Etc Control System API /////////////////////////


// [START] Dev System API /////////////////////////
/**
 * System manager for communicating with the Dart-IDE.
 * This is used by system.
 *
 * @api-version 1
 * @system
 */
export interface IDartIdeManager extends ISystemManager {
    /**
     * {@link Monitorable} a connection state. (boolean data type)
     *
     * @api-version 1
     * @system
     */
    readonly connectionState: Monitorable<boolean>;

    /**
     * {@link Monitorable} connected IpAddress (string data type)
     *
     * @api-version 1
     * @system
     */
    readonly connectionIpAddress: Monitorable<string>;

    /**
     * Connect to Build-Server with the desired IP address
     *
     * @param address An IP address of the desired Build-Server
     * @param port A port of the desired Build-Server
     * @return Return <Promise> Fulfills with the result of whether it has been connected successfully.
     *
     * @api-version 1
     * @system
     */
    connect(address?: string, port?: string): Promise<boolean>;

    /**
     * Disconnect from Build-Server.
     *
     * @return Return <Promise> Fulfills with the result of whether it has been disconnected successfully.
     *
     * @api-version 1
     * @system
     */
    disconnect(): Promise<boolean>;

    /**
     * Search IDE IP address list
     *
     * @return Returns a list of searched IDE IP addresses
     *
     * @api-version 1
     * @system
     */
    getIdeIpList(): Promise<string[]>;
}

/**
 * This is an enumeration type constant that refers to the log level, and is defined as follows.
 *
 * @enum
 * @api-version 1
 * @system
 */
export const LogLevel = {
    /**
     * Info level.
     *
     * @api-version 1
     * @system
     */
    INFO: 0,
    /**
     * Debug level.
     *
     * @api-version 1
     * @system
     */
    DEBUG: 1,
    /**
     * Warn level.
     *
     * @api-version 1
     * @system
     */
    WARN: 2,
    /**
     * Error level.
     *
     * @api-version 1
     * @system
     */
    ERROR: 3
} as const;
/**
 * @ignore
 */
export type LogLevel = typeof LogLevel[keyof typeof LogLevel];

/**
 * System manager to support developer.
 *
 * @api-version 1
 * @system
 */
export interface IDevManager extends ISystemManager {
    /**
     * {@link Monitorable} a latest Dart-Platform log.
     *
     * @api-version 1
     * @system
     */
    readonly latestLog: Monitorable<{ logLevel: LogLevel, log: string }>;
}
// [END] Dev System API /////////////////////////


// [START] Libraries /////////////////////////
/**
 * An interface enables interacting with the file system.
 * There are only some APIs because we do not want that module packages control all files.
 *
 * ```typescript
 *
 *  class MainScreen extends ModuleScreen {
 *
 *    readonly dartfs: IDartFileSystem;
 *
 *    constructor(props: ModuleScreenProps) {
 *      super(props);
 *      this.dartfs = System.getSystemLibrary(System.DART_FILE_SYSTEM, this) as IDartFileSystem;
 *    }
 *  }
 * ```
 * @api-version 1
 * @user
 */
export interface IDartFileSystem {
    /**
     * Get root directory path where module has been installed.
     *
     * @param context A caller's context
     *
     * @api-version 1
     * @user
     */
    getModuleRootDirPath(context: ModuleContext): string;

    /**
     * Whether the given path exists by checking with the file system asynchronously.
     * Module package can check only files which are located in the module package path.
     *
     * ```typescript
     *   isExist(relativeFilePath: string) {
     *     const rootFilePath = dartfs.getModuleRootDirPath(this);
     *     if (dartfs.exists(path.join(rootFilePath, relativeFilePath))) {
     *        // do someting
     *     }
     *   }
     * ```
     *
     * @param target A target file path.
     * @return Return <Promise> Fulfills with the result of whether given path exist.
     *
     * @api-version 1
     * @user
     */
    exists(target: string): Promise<boolean>;

    /**
     * Asynchronously reads the entire contents of a file.
     * Module package can read only files which are located in the module package path.
     *
     * ```typescript
     *   readConfigFile() {
     *     const rootFilePath = dartfs.getModuleRootDirPath(this);
     *     const processTemplate = dartfs.readFile(this.moduleContext, path.join(rootFilePath, "process_template.drl"));
     *     ...
     *   }
     * ```
     *
     * @param context A caller's context.
     * @param target A target file path.
     * @return Return <Promise> Fulfills with the contents of the file.
     *
     * @api-version 1
     * @user
     */
    readFile(context: ModuleContext, target: string): Promise<string>;

    /**
     * Get disk's free size and total size information.
     *
     * @param path A directory path to check.
     * @return Return <Promise> Fulfills with free size and total size in bytes.
     *
     * @api-version 1
     * @user
     */
    getDiskSpace(path: string): Promise<{ free: number, total: number } | null>;

    /**
    * Executes a SQL query.
    *
    * @param queryString The SQL query string to be executed.
    * @returns A Promise that resolves with the query result.
    *
    * @api-version 3
    * @user
    * @example
    * ```typescript
    *
    */
    run(packageName: string, queryString: string): Promise<boolean>;
}

/**
 * This is an enumeration type constant that refers to error code of file picker, and is defined as follows.
 *
 * @enum
 * @api-version 2
 * @user
 */
export const FilePickerErrorCode = {
    /**
     * Unknown error.
     *
     * @api-version 2
     * @user
     */
    UNKNOWN_ERROR: 0,
    /**
     * Canceled by user.
     *
     * @api-version 2
     * @user
     */
    CANCELED_BY_USER: 1,
    /**
     * Not enough memory available.
     *
     * @api-version 2
     * @user
     */
    NOT_ENOUGH_MEMORY_AVAILABLE: 2,
    /**
     * Not support in the environment.
     *
     * @api-version 2
     * @user
     */
    NOT_SUPPORT: 3
} as const;
/**
 * @ignore
 */
export type FilePickerErrorCode = typeof FilePickerErrorCode[keyof typeof FilePickerErrorCode];

/**
 * An interface represents options for file picker.
 *
 * @api-version 2
 * @user
 */
export interface FilePickerOptions {
    /**
     * When set to true multiple files may be selected. Default is false.
     *
     * @api-version 2
     * @user
     */
    multiple?: boolean

    /**
     * Allowed file types.
     *
     * @api-version 2
     * @user
     */
    types?: {
        /**
         * An optional description of the category of files types allowed.
         * This option is operated in Linux, Windows and macOS.
         *
         * @api-version 2
         * @user
         */
        description?: string,

        /**
         * A MIME type {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types}.
         *
         * @api-version 2
         * @user
         */
        mimeType: string,

        /**
         * File extensions.
         * This option is operated in Linux, Windows and macOS.
         *
         * @api-version 2
         * @user
         */
        extensions: string[]
    }[];
}

/**
 * An interface represents options for save file picker.
 *
 * @api-version 2
 * @user
 */
export interface SaveFilePickerOptions {
    /**
     * A suggested file name.
     *
     * @api-version 2
     * @user
     */
    suggestedName?: string,

    /**
     * Allowed file types.
     *
     * @api-version 2
     * @user
     */
    types?: {
        /**
         * An optional description of the category of files types allowed.
         * This option is operated in Linux, Windows and macOS.
         *
         * @api-version 2
         * @user
         */
        description?: string,

        /**
         * A MIME type {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types}.
         *
         * @api-version 2
         * @user
         */
        mimeType: string,

        /**
         * File extensions.
         * This option is operated in Linux, Windows and macOS.
         *
         * @api-version 2
         * @user
         */
        extensions: string[]
    }[];
}

/**
 * An interface represents a handle to a file system entry.
 *
 * @api-version 2
 * @user
 */
export interface FileHandler {
    /**
     * A file name.
     *
     * @api-version 2
     * @user
     */
    name: string;

    /**
     * Read a file as Buffer.
     *
     * @return Return <Promise> Fulfills with data as Buffer if the request has been operated successfully, otherwise {@link FilePickerErrorCode}.
     *
     * @api-version 2
     * @user
     */
    read: () => Promise<{ data?: Buffer, errorCode?: FilePickerErrorCode }>;
}

/**
 * An interface represents a handle to a file system entry.
 *
 * @api-version 2
 * @user
 */
export interface SaveFileHandler {
    /**
     * A file name.
     *
     * @api-version 2
     * @user
     */
    name: string;

    /**
     * Write data to the file.
     *
     * @param data Data to write.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    write: (data: string | Blob) => Promise<boolean>;
}

/**
 * Enumeration type constant that refers to types of entry, and is defined as follows.
 *
 * @enum
 * @api-version 2
 */
export const EntryType = {
    /**
     * File.
     *
     * @api-version 2
     * @user
     */
    FILE: 0,
    /**
     * Directory.
     *
     * @api-version 2
     * @user
     */
    DIR: 1
} as const;
/**
 * @ignore
 */
export type EntryType = typeof EntryType[keyof typeof EntryType];

/**
 * An interface represents a handle to a file system directory.
 *
 * @api-version 2
 * @user
 */
export interface DirectoryHandler {
    /**
     * A directory name.
     *
     * @api-version 2
     * @user
     */
    name: string;

    /**
     * Get entries in the directory.
     *
     * @return Return <Promise> Fulfills with an array of {@link EntryType} and name pair if the request has been operated successfully, otherwise {@link FilePickerErrorCode}.
     *
     * @api-version 2
     * @user
     */
    getEntries: () => Promise<{ entries?: { kind: EntryType, name: string }[], errorCode?: FilePickerErrorCode }>;

    /**
     * Write data to the file in the picked directory.
     *
     * @param name A file name to create.
     * @param data Data to write the {@link name} file.
     * @return Return <Promise> Fulfills with true if the request has been operated successfully, otherwise false.
     *
     * @api-version 2
     * @user
     */
    write: (name: string, data: string | Blob) => Promise<boolean>;
}

/**
 * An interface to show file picker.
 *
 * @api-version 2
 * @user
 */
export interface IFilePicker {
    /**
     * Show file picker dialog to read.
     *
     * @param options An {@link FilePickerOptions} for picker.
     * @return Return <Promise> Fulfills with {@link FileHandler} if the request has been operated successfully, otherwise {@link FilePickerErrorCode}.
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     * import {BaseModule, Context, FilePickerOptions, IFilePicker, ModuleScreen, ModuleScreenProps, System, ModuleContext,} from 'dart-api';
     * import React from 'react';
     * import {Button} from '@mui/material';
     * import {ThemeProvider} from '@mui/material/styles';
     * import {useTranslation} from 'react-i18next';
     *
     * // IIFE for register a function to create an instance of main class which is inherited BaseModule.
     * (() => {
     *     System.registerModuleMainClassCreator((packageInfo) => new Module(packageInfo));
     * })();
     *
     * class Module extends BaseModule {
     *     getModuleScreen(componentId: string) {
     *         if (componentId === 'MainScreen') {
     *             return MainScreen;
     *         }
     *         return null;
     *     }
     * }
     *
     * class MainScreen extends ModuleScreen {
     *     constructor(props: ModuleScreenProps) {
     *         super(props);
     *     }
     *
     *     render() {
     *         return (
     *             <ThemeProvider theme={this.systemTheme}>
     *                 <App moduleContext={this.moduleContext}/>
     *             </ThemeProvider>
     *         );
     *     }
     * }
     *
     * interface IAppProps {
     *     moduleContext: ModuleContext;
     * }
     *
     * function App(props: IAppProps) {
     *     const moduleContext = props.moduleContext;
     *     const {t} = useTranslation();
     *     const filePicker = moduleContext.getSystemLibrary(Context.FILE_PICKER) as IFilePicker;
     *
     *     // open file picker
     *     const handleOnClick = async () => {
     *         // set file picker option
     *         const options: FilePickerOptions = {
     *             multiple: true,
     *             types: [
     *                 {
     *                     mimeType: 'text/plain',
     *                     extensions: ['.txt'],
     *                 },
     *             ]
     *         };
     *         const filePickResult = await filePicker.showFilePicker(options);
     *         const fileHandlers = filePickResult.handlers;
     *         if (!fileHandlers) {
     *             return;
     *         }
     *
     *         // handle file picked using fileHandler
     *         for (const fileHandler of fileHandlers) {
     *             try {
     *                 // read file from fileHandler
     *                 fileHandler.read().then((result) => {
     *                     if (result.data) {
     *                         // TODO: Add your code here
     *                     }
     *                 });
     *             } catch (e) {
     *                 console.error(e);
     *             }
     *         }
     *     };
     *
     *     return (
     *         <div
     *             style={{
     *                 'width': '100%',
     *                 'height': '100%',
     *                 'position': 'relative',
     *             }}
     *             data-gjs-type="ContainerAbsolute"
     *         >
     *             <Button onClick={() => handleOnClick()}>showFilePicker</Button>
     *         </div>
     *     );
     * }
     *  ````
     */
    showFilePicker(options?: FilePickerOptions): Promise<{ handlers?: FileHandler[], errorCode?: FilePickerErrorCode }>;

    /**
     * Show file picker dialog to write.
     *
     * @param options An {@link SaveFilePickerOptions} for picker.
     * @return Return <Promise> Fulfills with {@link SaveFileHandler} if the request has been operated successfully, otherwise {@link FilePickerErrorCode}.
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     *  import {BaseModule, Context, FilePickerOptions, IFilePicker, ModuleScreen, ModuleScreenProps, System, ModuleContext,} from 'dart-api';
     * import React from 'react';
     * import {Button} from '@mui/material';
     * import {ThemeProvider} from '@mui/material/styles';
     * import {useTranslation} from 'react-i18next';
     * import {SaveFilePickerOptions} from "../libs/dart-api";
     *
     * // IIFE for register a function to create an instance of main class which is inherited BaseModule.
     * (() => {
     *     System.registerModuleMainClassCreator((packageInfo) => new Module(packageInfo));
     * })();
     *
     * class Module extends BaseModule {
     *     getModuleScreen(componentId: string) {
     *         if (componentId === 'MainScreen') {
     *             return MainScreen;
     *         }
     *         return null;
     *     }
     * }
     *
     * class MainScreen extends ModuleScreen {
     *     constructor(props: ModuleScreenProps) {
     *         super(props);
     *     }
     *
     *     render() {
     *         return (
     *             <ThemeProvider theme={this.systemTheme}>
     *                 <App moduleContext={this.moduleContext}/>
     *             </ThemeProvider>
     *         );
     *     }
     * }
     *
     * interface IAppProps {
     *     moduleContext: ModuleContext;
     * }
     *
     * function App(props: IAppProps) {
     *     const moduleContext = props.moduleContext;
     *     const {t} = useTranslation();
     *     const filePicker = moduleContext.getSystemLibrary(Context.FILE_PICKER) as IFilePicker;
     *
     *     // open file picker
     *     const handleOnClick = async () => {
     *         // set file picker option
     *         const options: SaveFilePickerOptions = {
     *             suggestedName: `test.txt`,
     *             types: [
     *                 {
     *                     mimeType: 'text/plain',
     *                     extensions: [".txt"],
     *                 },
     *             ],
     *         };
     *         const filePickResult = await this.filePicker.showSaveFilePicker(options);
     *         const fileHandler = filePickResult.handler;
     *         if (!fileHandler) {
     *             return;
     *         }
     *
     *         const testFileString = "Hello, World!"
     *         const writeResult = await fileHandler.write(testFileString);
     *         if (writeResult) {
     *             // TODO: Add your code here
     *         }
     *     }
     *
     *     return (
     *         <div
     *             style={{
     *                 'width': '100%',
     *                 'height': '100%',
     *                 'position': 'relative',
     *             }}
     *             data-gjs-type="ContainerAbsolute"
     *         >
     *             <Button onClick={() => handleOnClick()}>showSaveFilePicker</Button>
     *         </div>
     *     );
     * }
     *  ````
     */
    showSaveFilePicker(options?: SaveFilePickerOptions): Promise<{ handler?: SaveFileHandler, errorCode?: FilePickerErrorCode }>;

    /**
     * Show directory picker dialog to handle files in the picked directory.
     *
     * @return Return <Promise> Fulfills with {@link DirectoryHandler} if the request has been operated successfully, otherwise {@link FilePickerErrorCode}.
     *
     * @api-version 2
     * @user
     * @example
     *  ```typescript
     * import {BaseModule, Context, IFilePicker, ModuleScreen, ModuleScreenProps, System, ModuleContext, logger} from 'dart-api';
     * import React from 'react';
     * import { Button } from '@mui/material';
     * import { ThemeProvider } from '@mui/material/styles';
     *
     * // IIFE for register a function to create an instance of main class which is inherited BaseModule.
     * (() => {
     *   System.registerModuleMainClassCreator(
     *     (packageInfo) => new Module(packageInfo),
     *   );
     * })();
     *
     * class Module extends BaseModule {
     *   getModuleScreen(componentId: string) {
     *     if (componentId === 'MainScreen') {
     *       return MainScreen;
     *     }
     *     return null;
     *   }
     * }
     *
     * class MainScreen extends ModuleScreen {
     *   constructor(props: ModuleScreenProps) {
     *     super(props);
     *   }
     *
     *   render() {
     *     return (
     *       <ThemeProvider theme={this.systemTheme}>
     *         <App moduleContext={this.moduleContext} />
     *       </ThemeProvider>
     *     );
     *   }
     * }
     *
     * interface IAppProps {
     *   moduleContext: ModuleContext;
     * }
     *
     * function App(props: IAppProps) {
     *   const moduleContext = props.moduleContext;
     *   const filePicker = moduleContext.getSystemLibrary(
     *     Context.FILE_PICKER,
     *   ) as IFilePicker;
     *
     *   // open file picker
     *   const handleOnClick = async () => {
     *     const directoryPickResult = await filePicker.showDirectoryPicker();
     *     const directoryHandler = directoryPickResult.handler;
     *     if (!directoryHandler) {
     *       return;
     *     }
     *
     *     directoryHandler.getEntries().then((entries) => {
     *       if (entries.entries) {
     *         for (const file of entries.entries) {
     *           logger.info(file.name);
     *           // TODO: Add your code here
     *         }
     *       }
     *     });
     *   };
     *
     *   return (
     *     <div
     *       style={{
     *         'width': '100%',
     *         'height': '100%',
     *         'position': 'relative',
     *       }}
     *       data-gjs-type="ContainerAbsolute"
     *     >
     *       <Button onClick={() => handleOnClick()}>showDirectoryPicker</Button>
     *     </div>
     *   );
     * }
     *  ````
     */
    showDirectoryPicker(): Promise<{ handler?: DirectoryHandler, errorCode?: FilePickerErrorCode }>;
}

/**
 * An interface to control process.
 *
 * @api-version 1
 * @system
 */
export interface IDartProcess {
    /**
     * Exit the program.
     *
     * @api-version 1
     * @system
     */
    exitApp(): void;

    /**
     * Reload the program.
     *
     * @api-version 1
     * @system
     */
    reloadApp(): void;

    /**
     * Restart the program
     *
     * @api-version 1
     * @system
     */
    restartApp(): void;
}

/**
 * An interface to control external process.
 *
 * @api-version 2
 * @user
 */
export interface IExternalProcess {
    /**
     * Open {@link url} with external browser.
     * This function is not available on Linux.
     *
     * @param context A caller's context.
     * @param url An URL to open browser
     * @return Return false if it has been called on Linux, otherwise true.
     *
     * @api-version 2
     * @user
     */
    openUrlWithExternalBrowser(context: Context, url: string): boolean;
}
// [END] Libraries /////////////////////////


// [START] ETC /////////////////////////
/**
 * SDK Version
 *
 * @api-version 1
 * @user
 */
export const SDK_VERSION = Manifest.SDK_VERSION_3;
//2025-02-04
// [END] ETC /////////////////////////
