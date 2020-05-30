import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// React Hook
const Circular = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        function trick() {
            setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
        }

        const timer = setInterval(trick, 20);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <CircularProgress variant="determinate" value={progress} />
        </div>
    );
};

export default Circular;
