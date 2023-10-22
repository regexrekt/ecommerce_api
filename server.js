const express = requiure('express');
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    if (err) console.log(err);
    console.log(`Server is listening on PORT ${PORT}`);
})