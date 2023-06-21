import React from 'react';
import {
  Box,
  Card,
  IconButton,
  DialogActions,
  DialogContent,
  Typography,
  Button,
  SvgIcon,
} from '@mui/material';
import { ReactComponent as IconClose } from '../../../images/icons/cross-small-1.svg';
import { ReactComponent as IconPaw } from '../../../images/icons/pawprint.svg';

import styles from './styles';

function ModalCongrats({ onClick }) {

  return (
      <Card sx={styles.root}>
        <IconButton
          onClick={onClick}
          autoFocus
          sx={{
            position: 'absolute',
            zIndex: '2000',
            right: { mobile: 12, tablet: 24 },
            top: { mobile: 12, tablet: 24 },
            p: 0,
            m: 0,
            width: '24px',
            height: '24px',
            '& svg': {
              stroke: '#54ADFF',
               width: '24px',
            height: '24px',
            },
          }}
        >
          <IconClose />
        </IconButton>
        <DialogContent>
          <Box sx={styles.content}>
            <Typography sx={styles.title} component={'h1'}>
              Congrats!
            </Typography>
            <Typography sx={styles.commentText} component={'p'}>
              Your registration is successful
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClick}
            sx={styles.button}
          >
            Go to profile &nbsp;
            <SvgIcon
              component={IconPaw}
              inheritViewBox
              htmlColor="rgba(254, 249, 249, 0)"
            />
          </Button>
        </DialogActions>
      </Card>
  );
}

export default ModalCongrats;
