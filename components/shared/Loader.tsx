//lib
import * as React from 'react';
//mui
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

/**
 * Renders a spinning loader
 *
 * @returns {JSX.Element} - The loader component
 */
const Loader = (): JSX.Element => {
	return (
		<Box sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>
	);
};

export default Loader;
