export interface IGroup {
    functions: IFunctions[],
    groupName: string,
    id: number,
    minValue: string,
    maxValue: string,
    users: IUsers[],
    warning?: string
}

export interface IFunctions {
    title: string,
    functionCode: string,
    minValue: string,
    maxValue: string
}

export interface IUsers {
    userId: string,
    fullName: string
    userInitials?: string
}

export interface IFunctionDescr {
    function_code: string
    function_name: string,
}