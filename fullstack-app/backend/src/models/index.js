module.exports = (sequelize, DataTypes) => {
    const InputData = sequelize.define('InputData', {
        inputValue: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return InputData;
};