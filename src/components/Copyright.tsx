const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="smallest-title font-extrabold">
            © Eternal Studio {currentYear} / All rights reserved.
        </div>
    );
}

export default Copyright;