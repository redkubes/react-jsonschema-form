import React from 'react';

import Mui5ContextProps from './Mui5ContextProps';

/** Use require for loading these libraries in case they are not available in order to perform a useful fallback
 */
let mui;
let icons;
try {
  mui = require('@mui/material');
  icons = require('@mui/icons-material');
} catch (err) {
  if (process.env.NODE_ENV !== 'PRODUCTION') {
    console.log(err);
  }
}

export let Mui5Context: Mui5ContextProps;
export let DefaultChildren = () => <div>@mui not available</div>;

if (mui && Object.keys(mui).length && icons && Object.keys(icons).length) {
  const {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormGroup,
    FormLabel,
    Grid,
    IconButton,
    InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Paper,
    Radio,
    RadioGroup,
    Slider,
    TextField,
    Typography,
  } = mui;
  const {
    Add: AddIcon,
    ArrowUpward: ArrowUpwardIcon,
    ArrowDownward: ArrowDownwardIcon,
    Error: ErrorIcon,
    Remove: RemoveIcon,
  } = icons;

  DefaultChildren = () => (
    <Box marginTop={3}>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );

  Mui5Context = {
    Button,
    Box,
    Checkbox,
    Divider,
    Grid,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
    IconButton,
    Input: OutlinedInput,
    InputLabel,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Paper,
    Radio,
    RadioGroup,
    Slider,
    TextField,
    Typography,
    AddIcon,
    ArrowDownwardIcon,
    ArrowUpwardIcon,
    ErrorIcon,
    RemoveIcon,
  };
}
