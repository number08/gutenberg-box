/**
 * Used libraries
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const {
    InspectorControls,
} = wp.editor;
const {
    PanelBody,
    CheckboxControl,
    TextControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
    constructor(props) {
        super(...arguments);
        this.props = props;
    }


    render() {
        const {
            attributes: {
                addLink,
                link,
            },
            setAttributes
        } = this.props;

        return (
            <InspectorControls>
                <PanelBody>
                    <CheckboxControl
                        heading="Link to another Page"
                        label="Include?"
                        check={addLink}
                        onChange={(addLink) => setAttributes({ addLink })}

                    />
                    {addLink &&
                        <TextControl
                            label="include your link"
                            value={link}
                            onChange={(link) => setAttributes({ link })}
                        />
                    }
                </PanelBody>
            </InspectorControls>
        );
    }
}