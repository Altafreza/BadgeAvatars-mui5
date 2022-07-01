import * as React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

export default function BadgeAvatars() {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        <Avatar
          style={{ width: 32, height: 32, border: ' 2px solid red' }}
          alt="Remy Sharp"
          src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-12/25/Verified-Checkmark-1024.png"
        />
      }
    >
      <Avatar
        style={{ width: 152, height: 152 }}
        alt="Travis Howard"
        src="https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
      />
    </Badge>
  );
}
