export default function Tabs({ children, buttons, ButtonsContainerElement = "menu" }) {

    return (
        <>
            <ButtonsContainerElement>
                {buttons}
            </ButtonsContainerElement>
            {children}
        </>
    );
}
