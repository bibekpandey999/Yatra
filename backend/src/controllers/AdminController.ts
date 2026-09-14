


export const registerAdmin = async (req:, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All required fields must be provided",
                success: false,
            })
        }

    } catch (err) {
        console.log(err)
    }

}

export const loginAdmin = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const logoutAdmin = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const getAdminProfile = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const updateAdminProfile = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const changeAdminPassword = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const getAllTransportProviders = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const getTransportProviderById = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const verifyTransportProviderKYC = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const rejectTransportProviderKYC = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const deleteTransportProvider = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const unblockTransportProvider = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}

export const blockTransportProvider = () => {
    try {

    } catch (err) {
        console.log(err)
    }

}


export const getPendingKYCProviders = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getBlockedTransportProviders = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getAllCustomers = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getCustomerById = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const blockCustomer = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const unblockCustomer = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const deleteCustomer = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getCustomerRideHistory = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getAllRides = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getRideById = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

export const getActiveRides = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}




export const viewRideDetails = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const cancelRide = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const getCancelledRides = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}


export const getCompletedRides = () => {
    try {

    } catch (err) {
        console.log(err)
    }
}

