// Validation function which will validate the incoming data in request from browser

exports.validator = (req, res, next) => {
    req.check('name', 'Name is required.').notEmpty()
    req.check('phone', 'Phone is required.').notEmpty()
    req.check('phone').isLength({min: 10}).withMessage('Invalid Phone number.')
    req.check('address', 'Address is required.').notEmpty()
    req.check('address.pin', 'Pin is required.').notEmpty()
    .matches(/\d/)
    .withMessage('Pin must be in digits')
    .isLength({
        min: 6,
        max: 6
    })
    .withMessage('Invalid Pin. Pin number length should be 6')
    req.check('address.country', 'Country is required.').notEmpty()
    req.check('address.contactName', 'Contact Name is required.').notEmpty()
    req.check('address.detailAddress', 'Detail Address is required.').notEmpty()
    req.check('address.detailAddress.line1', 'Line 1 of Detail Address is required.').notEmpty()
    req.check('address.detailAddress.line2', 'Line 2 of Detail Address is required.').notEmpty()
    req.check('address.detailAddress.line3', 'Line 3 of Detail Address is required.').notEmpty()
    req.check('cart', 'Cart is Empty.').notEmpty()
    req.check('cart.*.id', 'Cart id should not be Empty.').notEmpty()
    req.check('cart.*.count', 'Cart count is required.').notEmpty()
    .matches(/\d/)
    .withMessage('Cart Count should be a number.')
    
    const errors = req.validationErrors()
    if(errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
}