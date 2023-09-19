export const formatUnit = (num) => {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'Tr';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num;
};

export const formatHoursMinus = (seconds, option = 0) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
        if (minutes > 0) {
            return `${hours} giờ, ${minutes} phút`;
        } else {
            return `${hours} giờ`;
        }
    } else {
        return `${minutes} phút`;
    }
};

export const formatTimeSong = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
};

export const formatDate = (input, option = 0) => {
    const date = new Date(input);
    switch (option) {
        case 0:
            return date.getFullYear();
        default:
            const options = { month: 'long', year: 'numeric' };
            return new Intl.DateTimeFormat('vi-VN', options).format(date);
    }
};
