import prisma from './db';

export const readUserSettings = async (auth) => {
    const userSettings = await prisma.user.findUnique({
        where: { auth },
    })
    return userSettings;
}

export const createUserSettings = async (auth, data) => {
    const userSettings = await prisma.user.create({
        data:{
            email: data.email,
            firstName: data.firstName ? data.firstName : null,
            lastName: data.lastName ? data.lastName : null,
            auth
        },
    })
    // console.log({userSettings})
    return userSettings;
}

export const updateUserSettings = async (auth, data) => {
    const userSettings = await prisma.user.update({
        where: { auth },
        data: {
            firstName: data.firstName ? data.firstName : null,
            lastName: data.lastName ? data.lastName : null,
        },
    })
    // console.log({userSettings})
    return userSettings;
}