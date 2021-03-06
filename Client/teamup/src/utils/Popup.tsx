import React from 'react';

type Props = {
  title: string;
  children?: React.ReactNode;
}

const Popup = ({ title, children }: Props) => {


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

          {children}

    </div>
  );
}

export default Popup;
